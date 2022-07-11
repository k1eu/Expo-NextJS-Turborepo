import * as React from "react";
import { render } from "@testing-library/react-native";

import Button from "./Button";

it(`renders correctly`, () => {
  const { getByText } = render(<Button title="Test" />);

  expect(getByText("Test")).toBeDefined();
});
