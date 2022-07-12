module.exports = {
  presets: ["next/babel", "@babel/preset-typescript"],
  plugins: [
    "@babel/plugin-transform-destructuring",
    ["react-native-web", { commonjs: true }],
    "react-native-reanimated/plugin",
  ],
};
