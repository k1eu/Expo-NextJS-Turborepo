import * as React from "react";
import { render, screen } from "@testing-library/react";

import Text from "./Text";

it(`renders correctly`, () => {
  render(<Text />);

  expect(screen.getByText("Test Text")).toBeDefined();
  expect(true).toBe(true);
});
