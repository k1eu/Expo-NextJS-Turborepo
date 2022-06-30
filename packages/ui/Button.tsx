import * as React from "react";
import { Button as RNButton, ButtonProps } from 'react-native';


export const Button = (props: ButtonProps) => {
  return <RNButton {...props}>Boop</RNButton>;
};
