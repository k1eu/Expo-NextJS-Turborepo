import * as React from "react";

import { View } from "react-native";
import { Button } from "ui";
import { Button as NativeBaseButton, NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <View>
        <Button title="MobileApp" />
        <NativeBaseButton>MobileAppNativeBase</NativeBaseButton>
      </View>
    </NativeBaseProvider>
  );
}
