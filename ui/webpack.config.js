const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({template: './public/index.html'})
  ],
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};