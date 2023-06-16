let img_1 = document.querySelector("img:nth-child(1)");
let img_2 = document.querySelector("img:nth-child(2)");
let img_3 = document.querySelector("img:nth-child(3)");
let img_prev = document.querySelector(".btn.left");
let img_next = document.querySelector(".btn.right");
let imgContainer = document.querySelector(".img-move");

// 번호를 누르면 해당 순번의 박스가 보여짐
img_1.addEventListener("click", function () {
	imgContainer.style.transform = "translateX(0%)";
});

img_2.addEventListener("click", function () {
	imgContainer.style.transform = "translateX(-33.333333%%)";
});

img_3.addEventListener("click", function () {
	imgContainer.style.transform = "translateX(-66.666666%)";
});

// 이전 or 다음 버튼 누르면 현재 박스에서 해당 방향 박스로 슬라이드 넘어감
let imgNumber = 0;
img_prev.addEventListener("click", function () {
	if (imgNumber == 0) {
		imgNumber = 2;
	} else {
		imgNumber--;
	}

	slideMove();
});

img_next.addEventListener("click", function () {
	if (imgNumber == 2) {
		imgNumber = 0;
	} else {
		imgNumber++;
	}

	slideMove();
});

// 반복되는 코드라서 slideMove 함수에 넣어줌
function slideMove() {
	imgContainer.style.transform = "translateX(-" + 33.333333 * imgNumber + "%)";
}
