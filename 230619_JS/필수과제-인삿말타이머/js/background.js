// 배경이미지 랜덤 전환 기능
const images = [
	"assets/img0.jpg",
	"assets/img1.jpg",
	"assets/img2.jpg",
	"assets/img3.jpg",
	"assets/img4.jpg",
];

function getRandomImage() {
	const randomIndex = Math.floor(Math.random() * images.length);
	const randomImage = images[randomIndex];
	document.getElementById("randomImage").src = randomImage;
}

document
	.getElementById("randomImage")
	.addEventListener("click", getRandomImage);
