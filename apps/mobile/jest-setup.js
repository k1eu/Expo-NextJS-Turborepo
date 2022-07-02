global.__reanimatedWorkletInit = () => {};

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
jest.mock("react-native-reanimated", () =>
  require("react-native-reanimated/mock")
);

global.ReanimatedDataMock = {
  now: () => 0,
};

jest.mock("@react-navigation/native/lib/commonjs/useLinking.native", () => ({
  default: () => ({ getInitialState: { then: jest.fn() } }),
  __esModule: true,
}));

global.__TEST__ = true; // eslint-disable-line no-undef
