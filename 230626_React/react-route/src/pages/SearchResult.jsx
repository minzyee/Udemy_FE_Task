import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// location은 쿼리스트링을 가져온다.

const SearchResult = () => {
	const location = useLocation();
	console.log(location);

	const queryParams = new URLSearchParams(location.search);
	console.log(queryParams);

	const query = queryParams.get("query");
	console.log("location = ", location);

	useEffect(() => {
		// 검색 결과를 가져오는 비동기 함수 또는 API 요청 등을 수행할 수 있다.
		// 예시: 검색 결과를 콘솔에 출력하기
		console.log("검색 결과: ", query);
	}, [query]);

	return (
		<div>
			<h1>검색 결과 페이지</h1>
			<h3>검색어: {query}</h3>
		</div>
	);
};

export default SearchResult;
