import React, { useEffect, useState } from "react";

const Greeting = () => {
	const [username, setUsername] = useState("");
	const [greeting, setGreeting] = useState("");

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// 입력한 이름을 로컬 스토리지에 저장한다.
		localStorage.setItem("username", username);
		paintGreeting(username);
	};

	const paintGreeting = (username) => {
		if (username) {
			setUsername(username);
			setGreeting(`안녕하세요. ${username} 님 !`);
		}
	};

	useEffect(() => {
		if (savedUsername === null) {
			paintGreeting(username);
		} else {
			paintGreeting(savedUsername);
		}
	}, []);

	const savedUsername = localStorage.getItem(username); // 저장한 이름을 가져온다.

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="이름을 입력해주세요."
					value={username}
					onChange={handleUsernameChange}
					required
				/>
				<button type="submit">확인</button>
			</form>
			<p>{greeting}</p>
		</>
	);
};

export default Greeting;
