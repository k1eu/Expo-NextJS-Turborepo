import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button } from "ui";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      // <SafeAreaProvider>
      //   <Button  title="mobileApp"/>
      //   <Navigation colorScheme={colorScheme} />
      //   <StatusBar />
      // </SafeAreaProvider>
      <View>
        <Button title="mobileApp" />
        <Button title="mobileApp" />
        <Button title="mobileApp" />
        <Button title="mobileApp" />
        <Button title="mobileApp" />
        <Button title="mobileApp" />
        <Button title="mobileApp" />
        <Button title="mobileApp" />
        <Button title="mobileApp" />
        <Button title="mobileApp" />
        <Button title="mobileApp" />
        <Button title="mobileApp" />
        <Button title="mobileApp" />
        <Button title="mobileApp" />
        <Button title="mobileApp" />
        <Button title="mobileApp" />
        <Button title="mobileApp" />
        <Button title="mobileApp" />
        <Button title="mobileApp" />
        <Button title="mobileApp" />
      </View>
    );
  }
}
