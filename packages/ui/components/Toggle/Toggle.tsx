import * as React from "react";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
import { View, Button, StyleSheet } from "react-native";
import { Button as NativeBaseButton } from "native-base";

import UIButton from "../Button";

const Toggle = () => {
  const randomWidth = useSharedValue(10);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });

  const onTogglePress = () => (randomWidth.value = Math.random() * 350);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.toggle, style]} />

      <UIButton onPress={onTogglePress} title="Toggle with UI button" />
      <NativeBaseButton onPress={onTogglePress}>
        Toggle with NativeBase button
      </NativeBaseButton>
      <UIButton
        leftIconName="chevron-down"
        onPress={onTogglePress}
        title="Toggle with UI button (icon)"
      />
      <Button title="Toggle with native button" onPress={onTogglePress} />
    </View>
  );
};

export default Toggle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  toggle: { width: 100, height: 80, backgroundColor: "black", margin: 30 },
});
