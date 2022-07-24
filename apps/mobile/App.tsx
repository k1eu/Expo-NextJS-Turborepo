import React from "react";
import { NativeBaseProvider, useTheme } from "native-base";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Main from "./screens/Main";
import { UISvg } from "ui";

const App = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <UISvg name="chevron-down" width={32} height={32} />
          <Main />
        </SafeAreaView>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 100,
  },
});

export default App;
