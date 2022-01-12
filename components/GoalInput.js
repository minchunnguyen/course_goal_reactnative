import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnterGoal] = useState("");
  const enterGoalHandler = (value) => {
    setEnterGoal(value);
  };

  const _handleAddGoal = (enteredGoal) => {
    props.onAddGoal(enteredGoal);
    setEnterGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          value={enteredGoal}
          onChangeText={enterGoalHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={() => _handleAddGoal(enteredGoal)} />
          </View>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="red"
              onPress={() => props.onCloseModal(false)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginBottom: 20,
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%",
  },
  button: {
    width: "60%",
  },
});

export default GoalInput;
