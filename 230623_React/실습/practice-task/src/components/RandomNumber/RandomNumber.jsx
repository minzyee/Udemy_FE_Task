import React from "react";
import { useEffect } from "react";
import { useState } from "react";

// min에 최솟값을 입력하고, max에 최댓값을 입력하면 그 범위 내의 난수를 생성한다.

// 범위에 따른 난수 생성
const GetRandomNum = ({ min, max }) => {
	const [number, setNumber] = useState(0);

	// 1초마다 랜덤한 숫자가 생성된다.
	useEffect(() => {
		const interval = setInterval(() => {
			let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
			setNumber(randomNum);
		}, 1000);

		// 클린업 함수
		return () => {
			clearInterval(interval);
		};
	}, [min, max]);

	return (
		<div>
			<h1>랜덤 번호 생성기</h1>
			<div>
				범위: {min} ~ {max}
			</div>
			<div>현재 번호: {number}</div>
		</div>
	);
};

const RandomNumber = () => {
	return <GetRandomNum min={1} max={5} />;
};

export default RandomNumber;
