import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  const addGoal = (goalText) => {
    setGoals((prevGoals) => [
      ...prevGoals,
      { text: goalText, id: +Date.now() },
    ]);
    setIsAddModalVisible(false);
  };

  const onPressItem = (id) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  const renderGoals = (dataItem) => {
    return (
      <GoalItem
        id={dataItem.item.id}
        itemText={dataItem.item.text}
        onPressItem={onPressItem}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.addGoal}>
        <Button title="Add Goal" onPress={() => setIsAddModalVisible(true)} />
      </View>
      <GoalInput
        onAddGoal={addGoal}
        isOpen={isAddModalVisible}
        onCancel={() => setIsAddModalVisible(false)}
      />
      <View style={styles.goalsContainer}>
        <FlatList data={goals} renderItem={renderGoals} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  addGoal: {
    marginTop: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});
