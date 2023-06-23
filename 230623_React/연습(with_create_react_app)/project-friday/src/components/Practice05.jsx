import React from "react";

// TodoList 컴포넌트 - ul 태그 안에 li 태그를 map 메서드를 이용해 생성한다.
const TodoList = ({ todos }) => {
	console.log(todos);
	// console.log(props);
	// const todos = props.todos;

	return (
		<ul>
			{todos.map((item) => (
				<li key={item.id}>{item.text}</li>
			))}
		</ul>
	);
};

const Practice05 = () => {
	const todos = [
		{ id: 1, text: "할 일 목록 1" },
		{ id: 2, text: "할 일 목록 2" },
		{ id: 3, text: "할 일 목록 3" },
		{ id: 4, text: "할 일 목록 4" },
	];

	// const anotherTodos = [
	// 	{ id: 1, text: "할 일 목록 11" },
	// 	{ id: 2, text: "할 일 목록 22" },
	// 	{ id: 3, text: "할 일 목록 33" },
	// 	{ id: 4, text: "할 일 목록 44" },
	// ];

	return <TodoList todos={todos} />;
};

export default Practice05;
