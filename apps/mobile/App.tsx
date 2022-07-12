import React from "react";
import { NativeBaseProvider } from "native-base";

import { UIButton, UISvg } from "ui";

import { Button } from "./components";

const App = () => {
  return (
    <NativeBaseProvider>
      <Button />
      <UISvg name="chevron-down" width={32} height={32} />
      <UIButton title="UI button" />
    </NativeBaseProvider>
  );
};

export default App;
