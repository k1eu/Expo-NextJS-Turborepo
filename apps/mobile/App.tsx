import * as React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import { UIButton, UISvg } from "ui";
import { TodosProvider } from "shared";

import { Button } from "./components";
import { TabNavigator } from "./Navigation";

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <TodosProvider>
          <TabNavigator />
        </TodosProvider>
        {/* <Button />
        <UISvg name="chevron-down" width={32} height={32} />
        <UIButton title="UI button" /> */}
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
