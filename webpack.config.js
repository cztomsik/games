const path = require('path')

module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: 'build',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'public'
  }
}
