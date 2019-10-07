const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({title: "Development", template: './public/index.html'}),
    new CopyWebpackPlugin([{ context: 'public/assets', from: '**/*', to: 'assets' }])
  ],
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  // dev server configurations
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
};