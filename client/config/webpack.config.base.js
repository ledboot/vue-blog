'use strict';
const helpers = require("./helpers"),
    CopyWebpackPlugin = require ('copy-webpack-plugin');


let config = {
    entry: {
    "main": helpers.root("/src/main.ts")
  },
  output: {
    path: helpers.root("/dist"),
    filename:'assets/js/[hash].[name].js',
    chunkFilename: "assets/js/[chunkhash].[name].js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".js", ".html"],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module: {
    rules: [
      {test: /\.ts$/, use:['tslint-loader'],exclude: /node_modules/, enforce: 'pre'},
      {test: /\.ts$/, use: ["awesome-typescript-loader"],exclude: /node_modules/, },
      {test: /\.html$/, use: ['html-loader'], exclude: ['./src/index.html']},
      {test: /\.css$/, use: ['css-loader']}
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: 'src/assets/css', to: '../css'}
    ]),
  ]
}
module.exports = config;