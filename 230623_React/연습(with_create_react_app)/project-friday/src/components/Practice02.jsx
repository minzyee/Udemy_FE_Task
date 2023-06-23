import React, { useState } from "react";

const Practice02 = () => {
	const [counter, setCounter] = useState(0);

	return (
		<>
			<div>카운트: {counter}</div>
			<button onClick={() => setCounter(counter - 1)}>-1</button>
			<button onClick={() => setCounter(counter + 1)}>+1</button>
		</>
	);
};

export default Practice02;
