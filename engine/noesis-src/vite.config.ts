import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// POLITEIA-V dev server. Port 5185 (base POLITEIA runs on 5181; Cylens apps on
// 5174/5175; Geometry 5176). /api proxies to the local intelligence server
// (server/index.mjs) which holds the Anthropic key server-side — the key never
// reaches this bundle.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5185,
    strictPort: false,
    proxy: {
      '/api': {
        // 127.0.0.1 explicitly: the API server binds loopback-only, and
        // "localhost" may resolve to ::1 first on some systems.
        target: 'http://127.0.0.1:8785',
        changeOrigin: true,
      },
    },
  },
  build: {
    // Never ship source maps. A .map file hands a visitor the original
    // TypeScript — filenames, comments, the lot — which is the single biggest
    // way a web build leaks its source. Off is Vite's default; it is stated
    // here so a later edit can't quietly turn it on.
    sourcemap: false,
    // The seeded proposal content is deliberately large; it ships with the app.
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Split heavy, rarely-changing vendors so the citizen-facing bundle
        // loads fast and caches well (Recharts is the bulk of the weight).
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          charts: ['recharts'],
          katex: ['katex'],
        },
      },
    },
  },
})
