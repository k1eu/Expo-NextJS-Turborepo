import { Button, Input } from "native-base";
import { IInputComponentType } from "native-base/lib/typescript/components/primitives/Input/types";
import * as React from "react";
import { View, Text } from "react-native";
import { useTodos } from "shared";

import { styles } from "./styles";

const CreateForm = () => {
  const [text, setText] = React.useState("");
  const { addTodo } = useTodos();

  const submitTodo = () => {
    if (!text) return;
    addTodo({ text, completed: false });
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Add a todo"
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <Button marginTop={8} onPress={() => {}}>
        Add
      </Button>
    </View>
  );
};

export default CreateForm;
