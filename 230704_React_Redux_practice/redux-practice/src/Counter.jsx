import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
	const count = useSelector((state) => state.value);
	const dispatch = useDispatch();

	return (
		<div>
			<h1>리덕스로 카운터 만들기</h1>
			<h3>카운터: {count}</h3>
			<button>-1</button>
			<button
				onClick={() => {
					// 버튼 클릭 이벤트로, up이라는 action이 전달될 때마다, 2씩 증가시키기
					dispatch({ type: "up", step: 2 });
				}}
			>
				+1
			</button>
		</div>
	);
};

export default Counter;
