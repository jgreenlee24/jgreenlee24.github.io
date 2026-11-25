module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: { sassOptions: { fiber: false } },
      scss: { sassOptions: { fiber: false } }
    }
  },
  pluginOptions: {
    i18n: {
      enableInSFC: true
    }
  }
}
