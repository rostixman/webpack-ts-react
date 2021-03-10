const { PATHS, ENV, NODE_ENV } = require("./webpack.consts");

const helpers = {
  entry: () => PATHS.entry,
  output: () => ({
    filename: "[name].js",
    path: PATHS.dist,
    publicPath: PATHS.pub
  }),
  mode: () => (ENV.isProduction ? "production" : "development"),
  resolve: () => ({
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: [PATHS.root, "node_modules"]
  }),
  sourceMap: () => (ENV.isProduction ? false : "inline-source-map"),
  server: () => ({
    contentBase: PATHS.dist,
    port: 8080,
    host: 'localhost',
    historyApiFallback: true,
    overlay: {
      warnings: false,
      errors: true
    }
  })
};

const configs = {
  define: { NODE_ENV: JSON.stringify(NODE_ENV) },
  clean: "./dist",
  html: ENV.isProduction
    ? { inject: true }
    : {
        inject: true,
        template: PATHS.html,
        chunksSortMode: "dependency"
      }
};

module.exports.configs = configs;
module.exports.helpers = helpers;
