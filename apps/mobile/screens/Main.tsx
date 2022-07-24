import * as React from "react";

import { UIButton, UICard, UISvg } from "ui";

import AnimatedToggle from "../components/AnimatedToggle";
import { Platform, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "native-base";

const Main = () => {
  const { colors } = useTheme();
  return (
    <UICard
      style={styles.card}
      headingStyle={{ color: colors.blueGray[900] }}
      title={`UI Wrapper in mobile app ${[Platform.OS]}`}
    >
      <AnimatedToggle />
      {/* <Text>fsdafsd</Text> */}
      {/* <UISvg name="chevron-down" width={32} height={32} /> */}
      {/* <UIButton title="UI button" /> */}
    </UICard>
  );
};

export default Main;

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
});
