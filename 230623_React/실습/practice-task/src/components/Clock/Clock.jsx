import React from "react";

const Clock = () => {
	const [time, setTime] = React.useState(new Date());

	const hours = String(time.getHours()).padStart(2, "0");
	const minutes = String(time.getMinutes()).padStart(2, "0");
	const seconds = String(time.getSeconds()).padStart(2, "0");

	React.useEffect(() => {
		const timeInterval = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => {
			clearInterval(timeInterval);
		};
	}, []);

	return <h2>{`${hours}:${minutes}:${seconds}`}</h2>;
};

export default Clock;
