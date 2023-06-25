import React, { useState } from "react";
import IMG_0 from "../../assets/img0.jpg";
import IMG_1 from "../../assets/img1.jpg";
import IMG_2 from "../../assets/img3.jpg";

const ImageSlider = () => {
	const [img, setImg] = useState(0);

	const handleLeftButton = () => {
		setImg(img - 1);
		console.log(img - 1);
		console.log(`IMG_${img}`);
	};

	const handleRightButton = () => {
		setImg(img + 1);
		console.log(img + 1);
		console.log(`IMG_${img}`);
	};

	return (
		<div>
			<h1>이미지 슬라이더</h1>
			<div>
				<img src={`IMG_${img}`} style={{ width: "100%" }} alt="" />
				{/* <img src={IMG_0} style={{ width: "100%" }} alt="" /> */}
			</div>
			<button onClick={handleLeftButton}>이전</button>
			<button onClick={handleRightButton}>다음</button>
		</div>
	);
};

export default ImageSlider;
