const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.ts',
  output: {
    filename: 'nyang2.js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
      extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.ts?$/, loader: "ts-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../template/index.html'),
    }),
  ],
};
