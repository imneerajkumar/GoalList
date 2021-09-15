import { deleteGoal, fetchGoals, insertGoal } from "./db";

export const ADD_GOAL = 'ADD_GOAL';
export const DEL_GOAL = 'DEL_GOAL';
export const SET_GOALS = 'SET_GOALS';

export const loadGoals = () => {
  return async dipatch => {
    try {
      const dbResult = await fetchGoals();
      dipatch({
        type: SET_GOALS,
        goals: dbResult.rows._array
      });
    } catch (error) {
      
    }
  };
};

export const addGoal = (enteredGoal) => {
  return async dipatch => {
    try {
      const dbResult = await insertGoal(enteredGoal);
      dipatch({ 
        type: ADD_GOAL, 
        id: dbResult.insertId, 
        goal: enteredGoal 
      });
    } catch (err) {
      throw err;
    }
  };
};

export const delGoal = (goalId) => {
  return async dipatch => {
    try {
      await deleteGoal(goalId);
      dipatch({ type: DEL_GOAL, id: goalId});
    } catch (err) {
      throw err;
    }
  };
};