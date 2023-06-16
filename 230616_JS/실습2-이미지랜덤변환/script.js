// 여러 요소 클릭 시, 선택 되게 만들기
let imgBox = document.getElementById("#img-box");

// 이미지들의 배열 --> RANDOM_IMG[0]
let RANDOM_IMG = [
	"img0.png",
	"img1.png",
	"img2.png",
	"img3.png",
	"img4.png",
	"img5.png",
	"img6.png",
	"img7.png",
];

// 화면에 보여줄 이미지
function printRandomImg() {
	for (let i = 0; i < RANDOM_IMG.length; i++) {
		document.getElementById("img-box").innerHTML =
			"<img src='./images/" + RANDOM_IMG[i] + "' alt=''>";
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
