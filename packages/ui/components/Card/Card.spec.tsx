import * as React from "react";
import { render } from "@testing-library/react-native";
import { Text } from "react-native";

import Card from "./Card";

it(`renders correctly`, () => {
  const { getByText } = render(
    <Card title="Test title">
      <Text>Test content</Text>
    </Card>
  );

  expect(getByText("Test title")).toBeDefined();
  expect(getByText("Test content")).toBeDefined();
});
