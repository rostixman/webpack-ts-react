const path = require("path");
const root = process.cwd();

const NODE_ENV = process.env.NODE_ENV || "development";

const PATHS = {
  root: root,
  dist: path.resolve(root, "./dist"),
  entry: path.resolve(root, "./src/base/index.tsx"),
  html: path.resolve(root, "./src/base/index.html"),
  pub: "/"
};

const ENV = {
  isDevelopment: NODE_ENV === "development",
  isProduction: NODE_ENV === "production"
};

module.exports.ENV = ENV;
module.exports.PATHS = PATHS;
module.exports.NODE_ENV = NODE_ENV;
