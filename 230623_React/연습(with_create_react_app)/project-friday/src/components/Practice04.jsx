import React, { useState } from "react";

// 버튼 토글 컴포넌트
const Toggle = () => {
	const [isOn, setIsOn] = useState(false); // OFF 상태로 초기화

	// 스위치 클릭 이벤트
	const handleClick = () => {
		setIsOn(!isOn);
		console.log(!isOn);
	};

	return (
		<>
			{/* isOn이 true 이면, ON */}
			{/* isOn이 false 이면, OFF */}
			<button onClick={handleClick}>{isOn ? "불 켜짐" : "불 꺼짐"}</button>
		</>
	);
};

const Practice04 = () => {
	return <Toggle />;
};

export default Practice04;
