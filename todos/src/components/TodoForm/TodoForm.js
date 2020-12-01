import React, { useState } from "react";
import "./TodoForm.scss";

function TodoForm({ createTodo }) {
	let emptyTodo = { id: "", title: "", isDone: false };

	let [todo, setTodo] = useState(emptyTodo);

	function onInputChange(e) {
		setTodo({ ...todo, title: e.target.value });
	}

	function addTodo(todo) {
		createTodo(todo);
		setTodo(emptyTodo);
	}

	return (
		<div className="input-fields">
			<input className="input-todo" type="text" value={todo.title} onChange={onInputChange}></input>
			<div className="input-buttons">
				<input
					type="button"
					value="OK"
					onClick={() => {
						addTodo(todo);
					}}
				/>
			</div>
		</div>
	);
}

export default TodoForm;
