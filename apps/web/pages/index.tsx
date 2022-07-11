import { Button } from "ui";
import { Button as NativeBaseButton } from "native-base";

import Text from "../components/Text/Text";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Text />
      <Button title="NextJS" />
      <NativeBaseButton>NativeBaseButton</NativeBaseButton>
    </div>
  );
}
