import * as React from "react";

import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import Svg from "../Svg";

import { SvgName } from "../Svg/types";

type Props = {
  title: string;
  containerStyles?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  leftIconName?: SvgName;
} & PressableProps;

export const Button = (props: Props) => {
  return (
    <Pressable style={[styles.container, props.containerStyles]} {...props}>
      <Text style={[styles.text, props.textStyle]}>{props?.title}</Text>
      {props.leftIconName ? (
        <Svg color="white" height={24} width={24} name={props.leftIconName} />
      ) : null}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "olive",
  },
  text: {
    color: "white",
  },
});
