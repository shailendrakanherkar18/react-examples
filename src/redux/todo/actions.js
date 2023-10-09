import TODO_ACTIONS from "./constants";

export const fetchTodos = () => (dispatch) => {
	// fetch list
	fetch("https://reqres.in/api/users?page=2")
		.then((resp) => {
			return resp.json();
		})
		.then((todoResponse) => {
			console.log("todoResponse :>> ", todoResponse.data);
			const todoList = todoResponse.data.map((todoEle) => {
				return {
					id: todoEle.id,
					task: todoEle.email,
					completed: false,
				};
			});

			dispatch({ type: TODO_ACTIONS.FETCH_TODO_ITEMS, payload: { todoList } });
		})
		// if success
		// 		gather emails as list
		// 		dispatch to reducer

		.catch

		// if fail
		//      log error
		();
};

export const addTodoItem = (todoText) => (dispatch) => {
	// assume a api call here
	dispatch({
		type: TODO_ACTIONS.ADD_TODO,
		payload: { todo: todoText },
	});
};

export const deleteTodo = (id) => {
	return {
		type: TODO_ACTIONS.DELETE_TODO,
		payload: { id: id },
	};
};

export const completeTodo = (id) => {
	return {
		type: TODO_ACTIONS.COMPLETE_TODO,
		payload: { id },
	};
};
