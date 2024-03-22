import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  Modal,
  Image,
} from "react-native";

const GoalInput = ({ isOpen, onAddGoal, onCancel }) => {
  const [goalText, setGoalText] = useState("");

  const onGoalTextChange = (currentGoalText) => {
    setGoalText(currentGoalText);
  };

  return (
    <Modal visible={isOpen}>
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.goalImage}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={onGoalTextChange}
        />
        <View style={styles.modalActionsContainer}>
          <View style={styles.actionButton}>
            <Button
              title="Add Goal"
              accessibilityLabel="Add Goal"
              onPress={() => onAddGoal(goalText)}
            />
          </View>
          <View style={styles.actionButton}>
            <Button
              title="Cancel"
              accessibilityLabel="Cancel"
              onPress={() => onCancel()}
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
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 6,
    color: "#fff",
  },
  modalActionsContainer: {
    flexDirection: "row",
  },
  actionButton: {
    marginHorizontal: 8,
    marginTop: 12,
  },
  goalImage: {
    height: 100,
    width: 100,
    margin: 30,
  },
});

export default GoalInput;
