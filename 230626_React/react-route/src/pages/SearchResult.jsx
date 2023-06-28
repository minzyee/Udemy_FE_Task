import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SearchResult = () => {
	const location = useLocation(); // useLocation()은 location 객체를 가져온다.
	console.log(location); // 그리고 location 객체는 현재 경로와 쿼리 문자열 등의 정보가 포함되어있다.

	// location.search는 ? 뒤의 url인 쿼리 스트링과 같다.
	// 쿼리스트링은 key = value 형태로 되어있으며, 여러개일 경우 & 로 이어져있다.
	const queryParams = new URLSearchParams(location.search);
	console.log(queryParams); // {size: 1} 이런 형식의 객체가 나온다.

	const query = queryParams.get("query"); // key값이 query 인 것을 가져온다는 의미
	console.log("query: ", query); // 내가 인풋창에 입력한 문자열이 나온다.

	useEffect(() => {
		// 검색 결과를 가져오는 비동기 함수 또는 API 요청 등을 수행할 수 있다.
		// 예시: 검색 결과를 콘솔에 출력하기
		console.log("검색 결과: ", query);
	}, [query]);

	return (
		<div>
			<h1>검색 결과 페이지</h1>
			<h3>검색어: {query}</h3> {/* 인풋에 입력한 글자가 {query}로 전달된다. */}
		</div>
	);
};

export default SearchResult;
