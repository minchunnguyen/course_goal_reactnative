import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnterGoal] = useState("");
  const enterGoalHandler = (value) => {
    setEnterGoal(value);
  };

  const _handerAddGoal = (enteredGoal) => {
    props.onAddGoal(enteredGoal);
    setEnterGoal("");
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        value={enteredGoal}
        onChangeText={enterGoalHandler}
      />
      <Button title="ADD" onPress={() => _handerAddGoal(enteredGoal)} />
      {/* <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalInput;
