import "@testing-library/jest-dom/extend-expect";
import mockSafeAreaContext from "react-native-safe-area-context/jest/mock";

jest.mock("react-native-safe-area-context", () => mockSafeAreaContext);

global.__reanimatedWorkletInit = () => {};

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

jest.mock("react-native-reanimated", () => {
  const reanimated = require("react-native-reanimated/mock");

  return reanimated;
});

global.ReanimatedDataMock = {
  now: () => 0,
};

global.__reanimatedWorkletInit = jest.fn();
