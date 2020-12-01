import React from "react";
import "./TodoItem.scss";

function TodoItem({ todo, onToggle, onDelete }) {
	return (
		<>
			<div className={"todo-item" + (todo.isDone ? " done" : "")} onClick={() => onToggle(todo.id)}>
				{todo.title}
				<span
					className="delete-btn"
					onClick={(e) => {
						onDelete(todo.id);
						e.stopPropagation();
					}}
				>
					<i className="fas fa-times"></i>
				</span>
			</div>
		</>
	);
}

export default TodoItem;
