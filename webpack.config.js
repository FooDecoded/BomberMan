const path = require('path');

module.exports = {
  entry: './public/js/Game.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js'
  },
  resolve: {
      extensions: []
  },
  module: {
      rules: [{
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader'
        }
      }]
  },
  plugins: []
}