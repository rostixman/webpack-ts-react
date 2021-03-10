const { CheckerPlugin } = require("awesome-typescript-loader");
const Clean = require("clean-webpack-plugin");
const Html = require("html-webpack-plugin");
const Define = require("webpack").DefinePlugin;

const { ENV } = require("./webpack.consts");
const { configs } = require("./webpack.utils");

const defaultPlugins = [
  new CheckerPlugin(),
  new Define(configs.define),
  new Clean(configs.clean),
  new Html(configs.html)
];

const productionPlugins = [...defaultPlugins];
const developmentPlugins = [...defaultPlugins];

const plugins = ENV.isProduction ? productionPlugins : developmentPlugins;

module.exports.plugins = plugins;
