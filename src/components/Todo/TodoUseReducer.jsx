import { useReducer } from "react";

import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

import "./styles.css";
import todoReducer, { initialTodos } from "../../reducer/todoReducer";

const Todo = () => {
	const [todosState, dispatch] = useReducer(todoReducer, initialTodos);

	const addTodo = (todoText) => {
		dispatch({ type: "ADD_TODO", payload: { todo: todoText } });
	};

	const deleteTodo = (id) => {
		dispatch({ type: "DELETE_TODO", payload: { "id": id } });
	};

	const toggleComplete = (id) => {
		dispatch({ type: "COMPLETE_TODO", payload: { id } });
	};

	return (
		<div className="todoWrapper">
			<TodoForm addTodo={addTodo} />
			{todosState.todos.map((todo) => (
				<TodoItem
					key={todo.id}
					task={todo}
					deleteTodo={deleteTodo}
					toggleComplete={toggleComplete}
				/>
			))}
		</div>
	);
};

export default Todo;
