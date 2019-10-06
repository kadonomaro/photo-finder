module.exports = {
  outputDir: 'docs',
  css: {
    modules: true
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/photo-finder/' : '/'
}
