import * as React from "react";

import { Button } from "ui";
import { Button as NativeBaseButton } from "native-base";

const Text = () => {
  return (
    <>
      <Button title="Test Text" />;
      <NativeBaseButton>NativeBaseButton</NativeBaseButton>;
    </>
  );
};

export default Text;
