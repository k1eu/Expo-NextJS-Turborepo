const { withExpo } = require("@expo/next-adapter");
const withFonts = require("next-fonts");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "ui",
  "react-native-web",
  "react-native-svg",
  "native-base",
  "react-native-svg",
]);
const path = require("path");

module.exports = withPlugins([
  withTM({
    reactStrictMode: true,
    webpack: (config, options) => {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        "react-native$": "react-native-web",
      };
      config.resolve.extensions = [
        ".web.js",
        ".web.ts",
        ".web.tsx",
        ...config.resolve.extensions,
      ];
      if (options.isServer) {
        config.plugins.push(
          new options.webpack.ProvidePlugin({
            requestAnimationFrame: path.resolve(__dirname, "./raf.js"),
          })
        );
      }
      return config;
    },
  }),
  [withFonts, { projectRoot: __dirname }],
  [withExpo, { projectRoot: __dirname }],
]);
