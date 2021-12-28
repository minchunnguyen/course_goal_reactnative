import React from "react";
import { Text, View, StyleSheet } from "react-native";

const GoalItem = ({itemData}) => {
  return (
    <View key={itemData.item.key} style={styles.listItem}>
      <Text>{itemData.item.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
