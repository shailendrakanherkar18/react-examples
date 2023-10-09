import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoItem = (props) => {
	const { task, deleteTodo, toggleComplete } = props;

	return (
		<div className="todoItem">
			<p
				className={`${task.completed ? "completed" : ""}`}
				onClick={() => toggleComplete(task.id)}
			>
				{task.task}
			</p>
			<FontAwesomeIcon className="ml-4" icon={faTrash} onClick={() => deleteTodo(task.id)} />
		</div>
	);
};

export default TodoItem;
