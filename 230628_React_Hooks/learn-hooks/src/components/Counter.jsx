import React, { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	const onClick = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<p>카운터: {count}</p>
			<button onClick={onClick}>+1씩 증가</button>
		</div>
	);
};

export default Counter;
