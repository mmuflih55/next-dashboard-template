const webpack = require("webpack");
const path = require("path");

require("dotenv").config();
module.exports = {
  webpack: (config) => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});
    config.plugins.push(new webpack.DefinePlugin(env));
    config = {
      ...config,
      resolve: {
        alias: {
          "~": path.resolve(__dirname, "src/"),
          "@": path.resolve(__dirname, "src/components/"),
          Utils: path.resolve(__dirname, "src/utils/"),
        },
      },
    };
    return config;
  },
};
