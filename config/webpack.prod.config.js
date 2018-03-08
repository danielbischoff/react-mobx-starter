const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const config = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'typings-for-css-modules-loader',
              options: { modules: true, camelCase: true, importLoaders: 2, namedExport: true }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => {
                  return [autoprefixer]
                }
              }
            },
            {
              loader: 'sass-loader',
            },
        ]})         
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'React Mobx Starter',
      inject: 'body',
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
    }),
  ]
};

module.exports = config;