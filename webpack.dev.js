const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, './dist'),
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'JavaScript-Scaffold',
      template: 'index.html',
    }),
  ],
};
