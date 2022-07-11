module.exports = {
  presets: ["next/babel"],
  plugins: [
    "@babel/plugin-transform-destructuring",
    ["react-native-web", { commonjs: true }],
    "react-native-reanimated/plugin",
  ],
};
