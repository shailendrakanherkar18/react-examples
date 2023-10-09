import { getRandomNumber } from "../shared/random";

export const initialTodos = {
	todos: [],
};

const todoReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TODO":
			const obj = {};
			const newTodos = [
				...state.todos,
				{
					id: getRandomNumber(),
					task: action.payload.todo,
					completed: false
				},
			];
			obj.todos = newTodos
			return obj;
		case "DELETE_TODO":
			return {
				todos: state.todos.filter((todo) => todo.id !== action.payload.id),
			};
		case "COMPLETE_TODO":
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
