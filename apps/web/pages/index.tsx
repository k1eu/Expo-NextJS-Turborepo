import { Button as NativeBaseButton } from "native-base";
import { UIButton } from "ui/components";

import Buttons from "../components/Buttons";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Buttons />
      <UIButton title="UI Button" />
    </div>
  );
}
