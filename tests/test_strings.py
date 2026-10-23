import pytest

import strings


def test_messages_skip_comments_and_keep_urls_intact() -> None:
    text = "/*! © ΑΝΩ ΠΟΛΙΤΕΙΑ */\nconst a='Καλημέρα';// σχόλιο\nconst u='https://x.gr';\n<!-- σχόλιο -->"
    assert [m for *_, m in strings.messages(text)] == ['Καλημέρα']


def test_overlapping_brand_and_greek_run_keep_the_longer_one() -> None:
    found = [m for *_, m in strings.messages("'POLITEIA EXTRAS · ΚΑΝΟΝΕΣ 1.0'")]
    assert found == ['POLITEIA EXTRAS · ΚΑΝΟΝΕΣ 1.0']


def test_translation_is_safe_in_any_quote_context() -> None:
    text, missing = strings.translate("x='Το σχολείο'; y=`Η αυλή`;", {'Το σχολείο': "L'école", 'Η αυλή': 'La "cour"'})
    assert text == "x='L’école'; y=`La ”cour”`;" and missing == []


def test_code_characters_in_a_translation_are_refused() -> None:
    with pytest.raises(SystemExit):
        strings.translate("'Γεια'", {'Γεια': 'Salut <b>'})


def test_untranslated_messages_are_reported_and_left_as_they_were() -> None:
    text, missing = strings.translate("'Ένα' + 'Δύο'", {'Ένα': 'Un'})
    assert text == "'Un' + 'Δύο'" and missing == ['Δύο']


def test_localize_switches_language_and_formats() -> None:
    out = strings.localize("<html lang=\"el\"> n.toLocaleString('el-GR') a.localeCompare(b.p.title,'el')", 'fr', 'fr-FR')
    assert out == "<html lang=\"fr\"> n.toLocaleString('fr-FR') a.localeCompare(b.p.title,'fr')"
