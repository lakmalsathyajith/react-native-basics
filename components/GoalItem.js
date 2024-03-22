import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = ({ id, itemText, onPressItem }) => {
  return (
    <View style={styles.goalItemView}>
      <Pressable
        onPress={() => onPressItem(id)}
        android_ripple={{ color: "#dddddd" }}
        style={({ pressed }) => pressed && styles.pressedGoalItem}
      >
        <Text style={styles.goalItem}>{itemText}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItemView: {
    backgroundColor: "#5e0acc",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    margin: 8,

    borderRadius: 6,
  },
  goalItem: {
    padding: 8,
    color: "white",
  },
  pressedGoalItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
