import React from "react";
import useCounterHook from "../hooks/useCounterHook";

const UseCount = () => {
	const { count, increment } = useCounterHook(100);
	return (
		<div>
			<h2>useCountHooks: {count}</h2>
			<button onClick={increment}>증가</button>
		</div>
	);
};

export default UseCount;
