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

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      {/* <ScrollView>
        {listGoal.map((item) => {
          return (
            <View key={item.key} style={styles.listItem}>
              <Text>{item.value}</Text>
            </View>
          );
        })}
      </ScrollView> */}

      <FlatList
        keyExtractor={(item, idex) => item.key}
        data={listGoal}
        renderItem={(itemData) => <GoalItem itemData={itemData} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
