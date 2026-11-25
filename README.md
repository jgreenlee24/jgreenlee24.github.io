# Justin Greenlee

Personal portfolio built with React and Vite. The site is static, does not use a backend, and does not make third-party requests while loading.

## Local development

Use Node.js 22.12 or later.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Edit portfolio copy and links in `content.js`. Images are optimized and served with the build. GitHub Pages builds and deploys `dist/` from the repository’s default branch with the workflow in `.github/workflows/pages.yml`.

The preceding Vue app is preserved in [legacy-vue-app](https://github.com/jgreenlee24/legacy-vue-app).
