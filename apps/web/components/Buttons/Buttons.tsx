import { Button as NativeBaseButton } from "native-base";
import * as React from "react";
import { View } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";

import { UIButton } from "ui/components";

const Buttons = (): JSX.Element => {
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

  return (
    <View style={{ flex: 1 }}>
      <NativeBaseButton>NativeBaseButton</NativeBaseButton>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Animated.View
          style={[
            { width: 100, height: 80, backgroundColor: "black", margin: 30 },
            style,
          ]}
        />
        <UIButton
          title="Test Text"
          onPress={() => {
            randomWidth.value = Math.random() * 350;
          }}
        />
      </View>
    </View>
  );
};

export default Buttons;
