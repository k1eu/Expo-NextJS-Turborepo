import * as React from "react";
import { render, screen } from "@testing-library/react";

import { NativeBaseProvider } from "native-base";

import AnimatedToggle from "./AnimatedToggle";

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

it(`renders correctly`, () => {
  render(
    <NativeBaseProvider initialWindowMetrics={inset}>
      <AnimatedToggle />
    </NativeBaseProvider>
  );

  expect(screen.getByText("Native Button")).toBeDefined();
  expect(screen.getByText("NativeBaseButton")).toBeDefined();
});
