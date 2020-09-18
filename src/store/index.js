import * as reducers from './reducers'
import { combineReducers } from 'redux';
import { createStore } from 'redux';



const todoReducer = combineReducers(reducers);
const store = createStore(todoReducer);

export default store;