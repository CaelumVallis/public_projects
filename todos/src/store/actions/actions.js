import todosService from "../../todos-service";

export let SET_TODOS = "SET_TODOS_ACTION";
export let setTodos = (todos) => ({ type: SET_TODOS, payload: todos });

export let ADD_TODO = "ADD_TODO_ACTION";
export let addTodo = (todo) => ({ type: ADD_TODO, payload: todo });

export let DELETE_TODO = "DELETE_TODO_ACTION";
export let deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });

export let TOGGLE_TODO = "TOGGLE_TODO_ACTION";
export let toggleTodo = (todo) => ({ type: TOGGLE_TODO, payload: todo });

export let getTodos = () => {
	return (dispatch) => {
		todosService.get("/").then(({ data }) => dispatch(setTodos(data)));
	};
};

export let createTodo = (todo) => {
	return (dispatch) => {
		todosService.post("/", todo).then((data) => {
			dispatch(addTodo(data.data));
		});
	};
};

export let removeTodo = (id) => {
	return (dispatch) => {
		todosService.delete("/" + id);
		dispatch(deleteTodo(id));
	};
};

export let markTodo = (todo) => {
	return function (dispatch) {
		let toggledTodo = { ...todo, isDone: !todo.isDone };
		todosService.put("/" + todo.id, toggledTodo);
		dispatch(toggleTodo(toggledTodo));
	};
};
