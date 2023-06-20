// 배경이미지 랜덤 전환 기능
// 여러 요소 클릭 시, 선택 되게 만들기
let imgBox = document.querySelector("#img-box");

// 이미지들의 배열 --> RANDOM_IMG[0]
let RANDOM_IMG = ["img0.jpg", "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];

// 화면에 보여줄 이미지
function printRandomImg() {
	for (let i = 0; i < RANDOM_IMG.length; i++) {
		document.getElementById("img-box").innerHTML =
			"<img src='./assets/" + RANDOM_IMG[i] + "' alt=''>";
	}
}

// 0~7 숫자를 그 안에서 무작위로 정렬하는 함수
function shuffle(array) {
	array.sort(() => Math.random() - 0.5);
}

// 이미지 순서를 셔플 해주는 함수
function getRandomImg(size) {
	shuffle(RANDOM_IMG);

	let showImg = [];
	for (let i = 0; i < RANDOM_IMG.length; i++) {
		showImg.push(RANDOM_IMG[i]);
	}
	return showImg;
}

// imgList를 출력해서 보여줘야한다.
const imgList = getRandomImg(RANDOM_IMG.length);
printRandomImg(imgList);
