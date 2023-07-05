import React, { useState, useEffect } from "react";
import auth, {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "../fConfig";
import Home from "./Home";

const Auth = ({ isLoggedIn }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [btnToggle, setBtnToggle] = useState(false);
	const [loginState, setLoginState] = useState(false);
	const [error, setError] = useState(false);
	console.log("isLoggedIn = ", isLoggedIn);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setLoginState(true);
			} else {
				setLoginState(false);
			}
			setBtnToggle(true);
		});
	}, []);

	const onChange = (event) => {
		console.log(event.target.value);
		const {
			target: { name, value },
		} = event;
		// console.log(event); // 이벤트 객체
		// console.log(event.target); // input 태그
		// console.log(event.target.value); // 각각의 input에 입력하는 값

		if (name === "email") {
			setEmail(value);
		} else if (name === "password") {
			setPassword(value);
		}
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		try {
			let data;
			if (btnToggle) {
				data = await createUserWithEmailAndPassword(auth, email, password);
			} else {
				data = await signInWithEmailAndPassword(auth, email, password);
			}
		} catch (error) {
			console.log(error);
			setError(error);
		}
	};

	const toggleFunc = () => {
		setBtnToggle((prev) => !prev);
	};

	return (
		<>
			{loginState ? (
				<Home />
			) : (
				<div>
					<form onSubmit={onSubmit}>
						<input
							name="email"
							value={email}
							onChange={onChange}
							type="text"
							placeholder="아이디를 입력하세요."
							required
						/>
						<input
							name="password"
							value={password}
							onChange={onChange}
							type="password"
							placeholder="비밀번호를 입력하세요."
							required
						/>
						<input
							onSubmit={onSubmit}
							type="submit"
							value={btnToggle ? "회원가입" : "로그인"}
						/>
					</form>
					<div>{error.message}</div>
					<button onClick={toggleFunc}>
						{btnToggle ? "로그인 할래요" : "회원가입 할래요"}
					</button>
				</div>
			)}
		</>
	);
};

export default Auth;
