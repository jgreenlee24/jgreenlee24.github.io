import { defineConfig } from 'vite'

// Relative emitted paths work at the root and in a repository subpath preview.
export default defineConfig({ base: './', publicDir: false, css: { postcss: { plugins: [] } } })
