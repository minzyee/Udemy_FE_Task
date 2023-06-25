import React from "react";
import { useState } from "react";

const TodoListItem = ({ todos }) => {
	return (
		<ul>
			{todos.map((todo, index) => {
				return <li key={index}>{todo}</li>;
			})}
		</ul>
	);
};

const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState(""); // input에 입력하여 새로 추가될 값
	console.log("newTodo: ", newTodo);

	const handleInputChange = (e) => {
		setNewTodo(e.target.value);
	};

	// newTodo는 input.value이고, handleSubmit 함수를 통해서 기존 투두리스트에 추가된다.
	const handleFormSubmit = (e) => {
		e.preventDefault();
		setTodos([...todos, newTodo]); // 기존의 투두리스트 목록에 새로운 투두(newTodo) 항목 추가
		setNewTodo(""); // input창 초기화
	};

	return (
		<div>
			<h1>✅ 오늘의 할 일 목록</h1>
			<form onSubmit={handleFormSubmit}>
				<input type="text" onChange={handleInputChange} value={newTodo} />
				<button type="submit">추가</button>
			</form>
			<TodoListItem todos={todos} />
		</div>
	);
};

export default TodoList;
