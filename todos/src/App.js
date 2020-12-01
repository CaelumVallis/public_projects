import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.scss";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import { getTodos, createTodo, removeTodo, markTodo } from "./store/actions/actions";

function App({ list, getTodos, createTodo, removeTodo, markTodo }) {
	useEffect(() => {
		getTodos();
	}, []);

	return (
		<div className="container-bg">
			<div className="todos-container">
				<h1>To Do List</h1>
				<TodoList todos={list} deleteTodo={removeTodo} toggleTodo={markTodo} />
				<TodoForm createTodo={createTodo} />
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return state;
}

const mapDispatchToProps = {
	getTodos,
	createTodo,
	removeTodo,
	markTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
