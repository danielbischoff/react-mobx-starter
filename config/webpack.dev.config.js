const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "9000";

const config = {
  mode: "development",
  entry: {
    app: "./src/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devtool: "eval-cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              onlyCompileBundledFiles: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  devServer: {
    host: HOST,
    port: PORT,
    compress: true,
    inline: true,
    historyApiFallback: true,
    hot: true,
    overlay: true,
    open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      title: "React Mobx Starter",
      inject: "body"
    })
  ]
};

module.exports = config;
