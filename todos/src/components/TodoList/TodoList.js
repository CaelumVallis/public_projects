import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss";

function TodoList({ todos, toggleTodo, deleteTodo }) {
	return (
		<div className="todo-list">
			{todos.map((item) => {
				return (
					<TodoItem
						key={item.id}
						todo={item}
						onToggle={() => {
							toggleTodo(item);
						}}
						onDelete={() => deleteTodo(item.id)}
					/>
				);
			})}
		</div>
	);
}

export default TodoList;
