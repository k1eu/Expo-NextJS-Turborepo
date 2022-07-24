import * as React from "react";
import { StyleProp, StyleSheet, Text, TextProps, TextStyle, View } from "react-native";
import Button from "../Button";

type CardProps = {
  children: React.ReactNode;
  style?: StyleProp<any>;
  headingStyle?: StyleProp<TextStyle>;
  title: string;
};

const Card = ({ children, style, title }: CardProps) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.heading, styles.commonPadding]}>{title}</Text>
      <View style={[styles.innerContainer, styles.commonPadding]}>
        {children}
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  commonPadding: {
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  innerContainer: {
    flex: 1,
  },
});
