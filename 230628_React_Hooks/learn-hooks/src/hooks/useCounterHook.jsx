import React, { useState } from "react";

// 뭘 받아올지
function useCounterHook(initialCount) {
	const [count, setCount] = useState(initialCount);

	// 어떤 기능을 할 건지
	// 1씩 증가하는 카운트
	const increment = () => {
		setCount(count + 1);
	};

	// 뭘 리턴할지
	// {}를 사용한 이유는 html 로직이 아닌, count라는 변ㅅ와 increment라는 함수만 넘길 것이기 때문이다.
	return { count, increment };
}

export default useCounterHook;
