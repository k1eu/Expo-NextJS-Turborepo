import * as React from "react";
import { render } from "@testing-library/react-native";
import { NativeBaseProvider } from "native-base";

import Toggle from "./Toggle";

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

it(`renders correctly`, () => {
  const { getByText } = render(
    <NativeBaseProvider initialWindowMetrics={inset}>
      <Toggle />
    </NativeBaseProvider>
  );

  expect(getByText("Toggle with native button")).toBeDefined();
  expect(getByText("Toggle with UI button")).toBeDefined();
  expect(getByText("Toggle with UI button (icon)")).toBeDefined();
  expect(getByText("Toggle with NativeBase button")).toBeDefined();
});
