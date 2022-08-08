import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";
import {goalImage}  from "../assets/images/goal.png";

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
        <Image source={require('../assets/images/goal.png')} style={styles.image}></Image>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          value={enteredGoal}
          onChangeText={enterGoalHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={() => _handleAddGoal(enteredGoal)} color="#b180f0"/>
          </View>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="#f31282"
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
    backgroundColor:"#311b6b"
  },
  image:{
    width:100,
    height:100,
    margin:20
  },
  input: {
    marginBottom: 20,
    borderWidth:1,
    borderColor:'#e4d0ff',
    backgroundColor:'#e4d0ff',
    color:'#120438',
    borderRadius:6,
    width:'80%',
    padding:10
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
