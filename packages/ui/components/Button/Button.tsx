import * as React from "react";

import {
  Pressable,
  PressableProps,
  StyleProp,
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
    <Pressable
      style={[
        {
          padding: 12,
          marginVertical: 12,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          backgroundColor: "olive",
        },
        props.containerStyles,
      ]}
      {...props}
    >
      {props.leftIconName ? (
        <Svg color="white" height={24} width={24} name={props.leftIconName} />
      ) : null}
      <Text style={[{ color: "white" }, props.textStyle]}>{props?.title}</Text>
    </Pressable>
  );
};

export default Button;
