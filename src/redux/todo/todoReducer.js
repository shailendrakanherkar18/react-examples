import { getRandomNumber } from "../../shared/random";
import TODO_ACTIONS from "./constants";

const todoInitialState = {
	todos: [],
};

const todoReducer = (state = todoInitialState, action) => {
	switch (action.type) {
		case TODO_ACTIONS.FETCH_TODO_ITEMS:
			debugger
			const newState = {...state};
			newState.todos = [...action.payload.todoList];
			return newState;

		case TODO_ACTIONS.ADD_TODO:
			const obj = {};
			const newTodos = [
				...state.todos,
				{
					id: getRandomNumber(),
					task: action.payload.todo,
					completed: false,
				},
			];
			obj.todos = newTodos;
			return obj;
		case TODO_ACTIONS.DELETE_TODO:
			return {
				todos: state.todos.filter((todo) => todo.id !== action.payload.id),
			};
		case TODO_ACTIONS.COMPLETE_TODO:
			return {
				todos: state.todos.map((todo) =>
					todo.id === action.payload.id
						? { ...todo, completed: !todo.completed }
						: todo
				),
			};
		default:
			return state;
	}
};

export default todoReducer;
