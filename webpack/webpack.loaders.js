const { PATHS } = require("./webpack.consts");

module.exports.loaders = [
  {
    test: /\.(tsx|ts)?$/,
    enforce: "pre",
    use: "tslint-loader",
    include: PATHS.root,
    exclude: [/node_modules/]
  },
  {
    test: /\.(tsx|ts)?$/,
    use: "awesome-typescript-loader",
    include: PATHS.root,
    exclude: [/node_modules/]
  }
];
