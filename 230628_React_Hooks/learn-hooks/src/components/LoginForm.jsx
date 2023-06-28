import React from "react";
import useForm from "../hooks/useForm";

const LoginForm = () => {
	const { values, handleChange, resetForm } = useForm({
		username: "", // 초기값 비워두기
		password: "", // 초기값 비워두기
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("로그인 데이터", values);
		resetForm();
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="username">사용자명: </label>
			<input
				type="text"
				name="username"
				value={values.username}
				onChange={handleChange}
			/>
			<br />
			<label htmlFor="password">비밀번호: </label>
			<input
				type="password"
				name="password"
				value={values.password}
				onChange={handleChange}
			/>
			<br />
			<button type="submit">Login</button>
		</form>
	);
};

export default LoginForm;
