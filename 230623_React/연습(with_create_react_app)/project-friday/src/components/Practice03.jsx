import React from "react";

const Greeting = ({ name }) => {
	return <div>안녕하세요. {name}님 !</div>;
};

const Practice03 = () => {
	return <Greeting name="민지" />;
};

export default Practice03;
