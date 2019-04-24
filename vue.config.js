// vue.config.js

module.exports = {
  // 选项...
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  devServer: {
    port: 9000
  }
}