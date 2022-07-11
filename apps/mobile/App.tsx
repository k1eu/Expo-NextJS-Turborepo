import React from "react";
import { NativeBaseProvider } from "native-base";

import { Button } from "./components";
import { UIButton } from "ui/components";

const App = () => {
  return (
    <NativeBaseProvider>
      <Button />
      <UIButton title="UI button" />
    </NativeBaseProvider>
  );
};

export default App;
