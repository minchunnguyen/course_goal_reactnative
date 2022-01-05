import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [listGoal, setListGoal] = useState([]);

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
  };

  const _handleDeleteItem = (idDeletedItem) => {
    const newList = listGoal.filter((item) => {
      return item.key !== idDeletedItem;
    });
    setListGoal(newList);
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />

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
