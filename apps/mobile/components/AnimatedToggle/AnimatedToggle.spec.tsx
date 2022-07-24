import * as React from "react";
import { render } from "@testing-library/react-native";
import { NativeBaseProvider } from "native-base";

import AnimatedToggle from "./AnimatedToggle";

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

it(`renders correctly`, () => {
  const { getByText } = render(
    <NativeBaseProvider initialWindowMetrics={inset}>
      <AnimatedToggle />
    </NativeBaseProvider>
  );

  expect(getByText("NativeBaseButton")).toBeDefined();
  expect(getByText("Native Button")).toBeDefined();
});
