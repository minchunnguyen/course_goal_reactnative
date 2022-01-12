import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button, Text } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [listGoal, setListGoal] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const addGoalHandler = (goalTitle) => {
    // setListGoal(listGoal=>[...listGoal, {
    //   key: Math.random().toString(),
    //   value: enteredGoal,
    // }]);

    setListGoal([
      ...listGoal,
      {
        key: Math.random().toString(),
        value: goalTitle,
      },
    ]);
    setIsOpen(false);
  };

  const _handleDeleteItem = (idDeletedItem) => {
    const newList = listGoal.filter((item) => {
      return item.key !== idDeletedItem;
    });
    setListGoal(newList);
  };

  const _handleCloseModel = (isOpen) =>{
    setIsOpen(isOpen);
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} visible={isOpen} onCloseModal={_handleCloseModel} />
      <Button title="ADD NEW GOAL" onPress={() => _handleCloseModel(true)}></Button>
      <FlatList
        keyExtractor={(item, idex) => item.key}
        data={listGoal}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.key}
            onDelete={_handleDeleteItem}
            itemData={itemData}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
