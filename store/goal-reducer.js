import Goal from '../model/goal';
import { ADD_GOAL, DEL_GOAL, SET_GOALS } from './goal-action';

const initialState = {
  goals: []
};

export default (state=initialState, action) => {
  switch (action.type) {
    case ADD_GOAL:
      const newGoal = new Goal(action.id.toString(), action.goal);  
      return {
        goals: state.goals.concat(newGoal)
      };

    case DEL_GOAL:
      return {
        goals: state.goals.filter(goal => goal.id !== action.id)
      };

    case SET_GOALS:
      return {
        goals: action.goals.map(
          goal => new Goal(goal.id.toString(), goal.goal)
        )
      };

    default:
      return state;   
  }
};

