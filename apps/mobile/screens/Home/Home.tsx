import React from "react";
import { View, Text } from "react-native";
import { UIToggle } from "ui";

const Home = () => {
  return (
    <View
      style={{
        padding: 70,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UIToggle />
    </View>
  );
};

export default Home;
