import React, { useState, useEffect } from "react";
import io from "socket.io-client";

// 3001번 포트로 열것이다.
const socket = io("http://localhost:3001"); // 서버의 URL에 맞게 변경한다.

const Chat = () => {
	const [username, setUsername] = useState("");
	const [messages, setMessages] = useState([]); // 메세지는 계속 쌓여야하기 때문에 리스트 형식으로 작성
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		socket.on("message", handleMessage);
		return () => {
			socket.off("message", handleMessage);
		};
	}, []);

	const handleMessage = (message) => {
		setMessages((prevMessage) => [...prevMessage, message]);
	};

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const handleMessageSubmit = (e) => {
		e.preventDefault();

		if (inputValue.trim() !== "") {
			const currentTime = new Date().toLocaleDateString(); // 현재 시간을 받아온다.
			socket.emit("message", {
				username,
				content: inputValue,
				time: currentTime,
			});
			setInputValue(""); // 전송하고나서 인풋창 비워주기
		}
	};

	return (
		<form onSubmit={handleMessageSubmit}>
			<h1>실시간 채팅</h1>
			<input
				type="text"
				value={username}
				onChange={handleUsernameChange}
				placeholder="사용자 이름을 입력하세요."
			/>
			<h1>채팅 내용</h1>

			{/* 입력되는 것이 실시간으로 채팅이 되게 값을 뿌려서 만들어주기 */}
			<div>
				{messages.map((message, index) => (
					<p key={index} style={{ color: message.color }}>
						{message.username}: {message.content}
						<span style={{ fontSize: "12px" }}> {message.time}</span>
					</p>
				))}
			</div>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button type="submit">전송</button>
		</form>
	);
};

export default Chat;
