import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
 
import { init } from './store/db';
import goalReducer from "./store/goal-reducer";
import GoalScreen from "./screens/GoalScreen";

init();

const rootReducer = combineReducers({
  goals: goalReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <GoalScreen />
    </Provider>
  );
}