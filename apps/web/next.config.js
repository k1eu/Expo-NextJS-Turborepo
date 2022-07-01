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

const nextConfig = {};

module.exports = withPlugins([
  withTM({
    reactStrictMode: true,
    webpack: (config) => {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        // Transform all direct `react-native` imports to `react-native-web`
        "react-native$": "react-native-web",
      };
      config.resolve.extensions = [
        ".web.js",
        ".web.ts",
        ".web.tsx",
        ...config.resolve.extensions,
      ];
      return config;
    },
  }),
  [withFonts, { projectRoot: __dirname }],
  [withExpo, { projectRoot: __dirname }],
]);
