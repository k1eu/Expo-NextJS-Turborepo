import * as React from "react";
import { Button as NativeBaseButton,  theme } from "native-base";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
import { View, Button, StyleSheet } from "react-native";

const { colors } = theme;

const AnimatedToggle = () => {
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

  const onPress = () => {
    randomWidth.value = Math.random() * 350;
  };

  return (
    <View style={[styles.container]}>
      <Animated.View style={[styles.rectangle, style]} />
      <View style={styles.buttons}>
        <Button

          color={styles.button.color}
          title="Native Button"
          onPress={onPress}
        />
        <NativeBaseButton onPress={onPress}>NativeBaseButton</NativeBaseButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blueGray[200],
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 8,
    overflow: 'hidden',
  },
  buttons: {
    flexDirection: "row",
    gap: 16,
  },
  rectangle: {
    width: 100,
    height: 80,
    backgroundColor: colors.primary[400],
    margin: 30,
  },
  button: {
    color: colors.primary[600],
  },
});

export default AnimatedToggle;
