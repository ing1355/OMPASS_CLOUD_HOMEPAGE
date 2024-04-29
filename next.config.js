// const withCSS = require("@zeit/next-css");
// const withImages = require("next-images");
// const withLess = require("@zeit/next-less");
// const withSass = require("@zeit/next-sass");

// const nextModeBabelPlugin = require("next-babel-conditional-ssg-ssr");
// const webpack = require("webpack");
const withTM = require('next-transpile-modules')(['@ant-design/icons', 'rc-util', 'rc-pagination', 'rc-picker', 'rc-notification', 'rc-tooltip', 'rc-table', 'rc-tree']);
// const presets = ["next/babel"];
// const plugins = [nextModeBabelPlugin("ssr")];

module.exports = withTM({
    compiler: {
      removeConsole: false,
    },
    env: {
      // adminRoute : "https://ompass.kr:4002",
      // apiRoute : "https://ompass.kr:4002"
      adminRoute: "https://admin.ompasscloud.com"
      // adminRoute : "https://192.168.182.140:9004"
    },
    webpack: (config) => {
      const oneOf = config.module.rules.find(
        (rule) => typeof rule.oneOf === 'object'
      );
      const fixUse = (use) => {
        if (use.loader && use.loader.indexOf('css-loader') >= 0 && use.options.modules) {
          use.options.modules.mode = 'local';
        }
      };
      if (oneOf) {
        oneOf.oneOf.forEach((rule) => {
          if (Array.isArray(rule.use)) {
            rule.use.map(fixUse);
          } else if (rule.use && rule.use.loader) {
            fixUse(rule.use);
          }
        });
      }
      return config
    },
    async rewrites() {
      return [
        {
          source: "/v2/:path*",
          destination: `http://192.168.182.141:8080/v2/:path*`
        },
      ];
    },
    trailingSlash: true,
  })

// module.exports = withTM(
//   withCSS(
//     withLess(
//       withImages(
//         withSass({
//           webpack: function (config, { isServer }) {
//             // if (!isServer) {
//             //   config.node = {
//             //     fs: "empty",
//             //   };
//             // }
//             config.module.rules.push({
//               test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
//               use: {
//                 loader: "url-loader",
//                 options: {
//                   limit: 100000,
//                   name: "[name].[ext]",
//                 },
//               },
//             });
//             // process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
//             const env = Object.keys(process.env).reduce((acc, curr) => {
//               acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
//               return acc;
//             }, {});
//             config.plugins.push(new webpack.DefinePlugin(env));
//             return config;
//           },
//           env: {
//             // adminRoute : "https://ompass.kr:4002",
//             // apiRoute : "https://ompass.kr:4002"
//             adminRoute: "https://admin.ompasscloud.com"
//             // adminRoute : "https://192.168.182.140:9004"
//           },
//           compiler: {
//             styledComponents: true,
//           },
//         })
//       )
//     )
//   )
// );
