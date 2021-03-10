const { helpers } = require("./webpack.utils");
const { loaders } = require("./webpack.loaders");
const { plugins } = require("./webpack.plugins");

module.exports = {
  mode: helpers.mode(),
  entry: helpers.entry(),
  output: helpers.output(),
  resolve: helpers.resolve(),
  devtool: helpers.sourceMap(),
  plugins: plugins,
  devServer: helpers.server(),
  module: { rules: loaders }
};
