import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const AddTodo = ({ submitHander }) => {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New Todo...."
        onChangeText={(val) => changeHandler(val)}
      />
      <Button
        title="Add todo"
        onPress={() => submitHander(text)}
        color="coral"
      />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
