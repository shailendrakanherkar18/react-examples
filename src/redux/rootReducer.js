import { combineReducers } from 'redux';
import todoReducer from './todo/todoReducer'

export default combineReducers({
    todoReducer: todoReducer,
});