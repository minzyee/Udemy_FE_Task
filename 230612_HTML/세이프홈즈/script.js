const reviewList = document.querySelector(".review-list");
const reviewItem = document.querySelectorAll(".review-card-item");
const reviewItemWidth = document.querySelector(".review-card-item").offsetWidth;
const reviewBtnLeft = document.querySelector(".reviewBtn.left");
const reviewBtnRight = document.querySelector(".reviewBtn.right");
let currentIndex = 0;

reviewBtnRight.addEventListener("click", showNextReview);
reviewBtnLeft.addEventListener("click", showPrevReview);

function showNextReview() {
	currentIndex -= reviewItemWidth;
	if (
		currentIndex <
		-(reviewList.offsetWidth - reviewList.parentElement.offsetWidth)
	) {
		currentIndex = 0;
	}
	reviewList.style.transform = `translateX(${currentIndex}px)`;
}

function showPrevReview() {
	currentIndex += reviewItemWidth;
	if (currentIndex > 0) {
		currentIndex = -(
			reviewList.offsetWidth - reviewList.parentElement.offsetWidth
		);
	}
	reviewList.style.transform = `translateX(${currentIndex}px)`;
}
