const path = require("path");
const isProduction = process.env.NODE_ENV == "production";

/**
 * @type {import("webpack").Configuration}
 */
const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    module: true,
    library: {
      type: "module",
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
  experiments: {
    outputModule: true,
  },
};

module.exports = () => {
  config.mode = isProduction ? "production" : "development";
  return config;
};
