import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import GoalInput from '../components/GoalInput';
import GoalItem from '../components/GoalItem';
import * as goalActions from '../store/goal-action';

function GoalScreen() {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const goals = useSelector(state => state.goals.goals);

  useEffect(() => {
    dispatch(goalActions.loadGoals());
  }, [dispatch]);

  const addGoalHandler = (enteredGoal) => {
    if (enteredGoal) {
      dispatch(goalActions.addGoal(enteredGoal));
    }
    setVisible(false);
  }

  const removeGoalHandler = (goalId) => {
    dispatch(goalActions.delGoal(goalId));
  }

  return (
    <ImageBackground source={require('../assets/background.png')} style={styles.background}>
      <View style={styles.screen}>
        <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
          <Text style={styles.text}>ADD NEW GOAL</Text>
        </TouchableOpacity>
        <GoalInput 
          addGoalHandler={addGoalHandler} 
          handleVisible={() => setVisible(false)}
          visible={visible}
        />  
        <FlatList 
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <GoalItem item={item} onDelete={removeGoalHandler} />}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  screen: {
    padding: 40
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  text: {
    color: "#d7f5e8",
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default GoalScreen;