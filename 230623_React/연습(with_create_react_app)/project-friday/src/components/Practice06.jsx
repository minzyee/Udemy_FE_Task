import React, { useEffect, useState } from "react";

const Timer = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCount((count) => count + 1);
			console.log(count);
		}, 1000);

		return () => {
			clearInterval(timer);
			console.log("cleanUp function ");
		};
	}, []);

	return <p>{count}</p>;
};

const Practice06 = () => {
	return <Timer />;
};

export default Practice06;
