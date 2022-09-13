import { Text, View, StyleSheet } from "react-native";
import { UIToggle } from "ui";

import cssStyles from "./index.module.css";

export default function Web() {
  return (
    <div>
      <View style={styles.row}>
        <Text style={styles.h1}>Hello</Text>
        <h1 className={cssStyles.h1}>Web</h1>
      </View>
      <UIToggle />
    </div>
  );
}

const styles = StyleSheet.create({
  h1: {
    color: "lightblue",
    fontSize: 32,
    fontWeight: "bold",
    padding: 20,
  },
  row: {
    flexDirection: "row",
  },
});
