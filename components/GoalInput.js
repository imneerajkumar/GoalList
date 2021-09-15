import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

function GoalInput({ addGoalHandler, visible, handleVisible }) {
  const [enteredGoal, setEnteredGoal] = useState("");

  const handleAdd = () => {
    addGoalHandler(enteredGoal);
    setEnteredGoal("");
  }

  const handleCancel = () => {
    handleVisible();
    setEnteredGoal("");
  }

  return (
    <Modal visible={visible} animationType="slide" >
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Enter your Goal..." 
          style={styles.input} 
          onChangeText={text => setEnteredGoal(text)}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={handleCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" color="#1a6e48" onPress={handleAdd} />
          </View>
        </View>
      </View>  
    </Modal>
  );
} 

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center"
  },
  input: { 
    width: "80%", 
    borderColor: "black", 
    borderWidth: 1, 
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%"
  },
  button: {
    width: "40%"
  }
})

export default GoalInput;