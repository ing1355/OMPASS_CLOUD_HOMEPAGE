const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
const withLess = require("@zeit/next-less");
const withSass = require("@zeit/next-sass");

const nextModeBabelPlugin = require("next-babel-conditional-ssg-ssr");
const webpack = require("webpack");
const presets = ["next/babel"];
const plugins = [nextModeBabelPlugin("ssr")];

module.exports = withCSS(
  withLess(
    withImages(
      withSass({
        webpack: function (config, { isServer }) {
          if (!isServer) {
            config.node = {
              fs: 'empty'
            }
          }
          config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
              loader: "url-loader",
              options: {
                limit: 100000,
                name: "[name].[ext]",
              },
            },
          });
          // process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
          const env = Object.keys(process.env).reduce((acc, curr) => {
            acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
            return acc;
          }, {});
          config.plugins.push(new webpack.DefinePlugin(env));
          return config;
        },
        webpack5: false,
        presets,
        plugins,
      })
    )
  )
);
