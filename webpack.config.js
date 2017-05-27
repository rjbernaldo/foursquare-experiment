const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();

module.exports = {
  entry: [
    './src/index',
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        API_KEY: JSON.stringify(process.env.API_KEY),
        CLIENT_ID: JSON.stringify(process.env.CLIENT_ID),
        CLIENT_SECRET: JSON.stringify(process.env.CLIENT_SECRET),
        VERSION: JSON.stringify(process.env.VERSION),
        MARKER_URL: JSON.stringify(process.env.MARKER_URL),
        CURRENT_MARKER_URL: JSON.stringify(process.env.CURRENT_MARKER_URL),
      },
    }),
  ],
};
