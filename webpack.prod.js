const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MinCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        use: [MinCSSExtractPlugin.loader, 'style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'script-loader',
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new MinCSSExtractPlugin({ filename: '[name].[contenthash].css' }),
    new HTMLWebpackPlugin({
      title: 'JavaScript-Scaffold',
      template: 'index.html',
    }),
  ],
};
