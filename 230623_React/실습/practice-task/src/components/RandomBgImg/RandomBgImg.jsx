import React from "react";
import IMG_0 from "../../assets/img0.jpg";
import IMG_1 from "../../assets/img1.jpg";
import IMG_2 from "../../assets/img3.jpg";

const RandomBgImg = () => {
	const [randomIndex, setRandomIndex] = React.useState(0);
	const images = [IMG_0, IMG_1, IMG_2];

	// 이미지를 담고있는 배열 갯수만큼의 난수 생성
	const changeImages = () => {
		const newIndex = Math.floor(Math.random() * images.length);
		setRandomIndex(newIndex);
	};

	return (
		<img
			src={images[randomIndex]}
			alt="배경이미지"
			style={{ width: "100%", height: "100%" }}
			onClick={changeImages}
		/>
	);
};

export default RandomBgImg;
