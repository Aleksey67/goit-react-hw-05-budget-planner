import { combineReducers, createStore } from 'redux';
import plannerReducer from './planner/reducer';

const reducer = combineReducers({ planner: plannerReducer });

const store = createStore(reducer);
export default store;
