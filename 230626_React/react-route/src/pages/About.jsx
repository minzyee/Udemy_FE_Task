import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// search query를 가져와야한다? 왜?
// 라우팅 하는 곳에 쿼리스트링을 연결해주고
// 그 결과를 보여줄 페이지를 만들어준다.

const About = () => {
	const navigate = useNavigate(); // 선언함으로써 useNavigate() 훅을 쓸 수 있다.
	const [searchQuery, setSearchQuery] = useState("");

	// form을 제출하자마자 url로 쿼리스트링을 보내야한다.
	const onSubmit = (e) => {
		e.preventDefault();
		navigate(`/search?query=${searchQuery}`);
	};

	const onChange = (e) => {
		console.log(e.target.value);
		setSearchQuery(e.target.value);
	};

	return (
		<div>
			<h1>About 페이지</h1>
			<form onSubmit={onSubmit}>
				<h3>검색어를 입력하세요 !</h3>
				<input
					type="text"
					value={searchQuery}
					onChange={onChange}
					placeholder="여행가고 싶은 지역"
				/>
				<button type="submit">검색</button>
			</form>

			<h2>다른 페이지로 이동: </h2>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
			</ul>
		</div>
	);
};

export default About;
