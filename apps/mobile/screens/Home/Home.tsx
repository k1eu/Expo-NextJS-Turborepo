import React from "react";
import { StyleSheet, View } from "react-native";
import { UIToggle } from "ui";

const Home = () => {
  return (
    <View style={styles.container}>
      <UIToggle />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 70,
  },
});
