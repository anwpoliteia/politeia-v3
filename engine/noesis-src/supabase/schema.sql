-- POLITEIA — auth & profiles schema (spec §5, focused on profiles for now).
-- Run once in the Supabase SQL editor (Dashboard → SQL → New query → Run).
-- Safe to re-run: every statement is idempotent.

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  username text,
  display_name text,
  region text default '',
  language text default 'el',
  created_at timestamptz default now()
);

-- For existing installs created before usernames existed.
alter table public.profiles add column if not exists username text;

-- Usernames are unique, case-insensitively (no look-alike impersonation).
-- NULLs are allowed and distinct, so rows without a handle never collide.
create unique index if not exists profiles_username_lower_key
  on public.profiles (lower(username));

alter table public.profiles enable row level security;

-- Privacy by design (Hard Rule 6): a citizen may read and write ONLY their own
-- profile row.
drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id);

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own" on public.profiles
  for insert with check (auth.uid() = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id);

-- Availability check for the sign-up form. SECURITY DEFINER so it can see all
-- rows for the uniqueness test WITHOUT exposing any other citizen's data — it
-- returns only a boolean.
create or replace function public.username_available(candidate text)
returns boolean
language sql
security definer
set search_path = public
as $$
  select not exists (
    select 1 from public.profiles where lower(username) = lower(candidate)
  );
$$;
grant execute on function public.username_available(text) to anon, authenticated;

-- Auto-create a profile row the moment a citizen signs up (Google or email),
-- assigning a unique username from the chosen handle (email sign-up metadata)
-- or derived from the email, with a numeric suffix on collision.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  base text;
  candidate text;
  n int := 0;
begin
  base := regexp_replace(
    lower(coalesce(
      nullif(new.raw_user_meta_data ->> 'username', ''),
      split_part(coalesce(new.email, ''), '@', 1),
      'politis'
    )),
    '[^a-z0-9_]', '', 'g'
  );
  if length(base) < 3 then
    base := base || 'polit';
  end if;
  base := left(base, 20);

  candidate := base;
  while exists (select 1 from public.profiles where lower(username) = candidate) loop
    n := n + 1;
    candidate := left(base, 17) || n::text;
  end loop;

  insert into public.profiles (id, username, display_name)
  values (
    new.id,
    candidate,
    coalesce(
      new.raw_user_meta_data ->> 'full_name',
      new.raw_user_meta_data ->> 'name',
      base
    )
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();
