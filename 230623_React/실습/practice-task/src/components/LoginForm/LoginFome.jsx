import React from "react";
import { useState } from "react";

const LoginFome = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isLogin, setIsLogIn] = useState(false);

	const onchangeUsername = (e) => {
		setUsername(e.target.value);
		console.log(e.target.value);
	};

	const onchangePassword = (e) => {
		setPassword(e.target.value);
		console.log(e.target.value);
	};

	const onLoginSubmit = (e) => {
		e.preventDefault();
		// 사용자 인증 로직
		if (username === "admin" && password === "password") {
			setIsLogIn(true);
			console.log("로그인 성공");
		} else {
			console.log("다시 입력해주세요.");
			setUsername("");
			setPassword("");
		}
	};

	const onLogOut = () => {
		setIsLogIn(false);
		setUsername("");
		setPassword("");
	};

	// 로그인 된 상태에는 환영 메세지 표시
	if (isLogin) {
		return (
			<div>
				<h1>환영합니다. {username}님</h1>
				<button onClick={onLogOut}>로그아웃</button>
			</div>
		);
	}

	// 로그인이 아닌 상태에서는 로그인 폼 보여주기
	else {
		return (
			<form onSubmit={onLoginSubmit}>
				<input
					type="text"
					id="username"
					value={username}
					onChange={onchangeUsername}
					placeholder="아이디를 입력하세요."
				/>
				<input
					type="password"
					id="password"
					value={password}
					onChange={onchangePassword}
					placeholder="비밀번호를 입력하세요."
				/>
				<button type="submit">로그인</button>
			</form>
		);
	}
};

export default LoginFome;
