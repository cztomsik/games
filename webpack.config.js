const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    bundle: './src'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: 'build',
    filename: '[name].js'
  },
  devServer: {
    contentBase: 'public'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    })
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'pixi.js': 'PIXI',
    'lodash': '_'
  }
}
