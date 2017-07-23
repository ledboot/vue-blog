const helpers = require("./helpers"),
  webpackConfig = require("./webpack.config.base");

webpackConfig.devServer = {
  port: 3300,
  host: "localhost",
  historyApiFallback: true,
  watchOptions: {aggregateTimeout: 300, poll: 1000},
  contentBase: './src',
  open: true,
  openPage:'',
  hot:true
};

module.exports = webpackConfig;
