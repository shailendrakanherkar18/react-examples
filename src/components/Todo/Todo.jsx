import {  useState } from "react";

import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { getRandomNumber } from "../../shared/random";

import "./styles.css";

const Todo = () => {
	const [todos, setTodos] = useState([]);
	const addTodo = (todo) => {
		// create a new array
		const newTodos = [
			...todos,
			{ id: getRandomNumber(), task: todo, completed: false },
		]
		// set that to a state
		setTodos(newTodos);
	};

	const deleteTodo = (id) => {
		const filteredTodos = todos.filter((todo) => todo.id !== id);
		setTodos(filteredTodos);
	};

	const toggleComplete = (id) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	return (
		<div className="todoWrapper">
			<TodoForm addTodo={addTodo} />
			{todos.map((todo) => (
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
