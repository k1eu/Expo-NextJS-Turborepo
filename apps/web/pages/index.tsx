import { Button } from "ui";
import { Button as NativeBaseButton} from 'native-base';

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button title="NextJS"/>
      <NativeBaseButton>NativeBaseButton</NativeBaseButton>
    </div>
  );
}
