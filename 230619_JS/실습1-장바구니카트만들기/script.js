const addCartBtn = document.querySelectorAll(".addCart");
const productCounts = {}; // 제품의 개수를 관리하는 객체
const cartList = document.querySelector(".cart-list");

addCartBtn.forEach((addBtn) => {
	addBtn.addEventListener("click", () => {
		const fruitName = addBtn.parentNode.querySelector("h3").textContent;
		const fruitPrice = parseInt(
			addBtn.parentNode.querySelector("h4").textContent,
		);

		// 제품별 개수 카운팅 또는 초기화
		if (fruitName in productCounts) {
			productCounts[fruitName]++;
		} else {
			// 과일이 객체 안에 없다면, 이름을 추가하고, 값을 1로 셋팅한다.
			productCounts[fruitName] = 1;
		}

		let cartAlert = `${fruitName}을(를) 장바구니에 담았습니다. <br> 총 ${
			productCounts[fruitName]
		}개, ${productCounts[fruitName] * fruitPrice}원 입니다.`;
		const cartItem = document.createElement("li");
		cartItem.innerHTML = cartAlert;
		cartList.appendChild(cartItem);

		console.log(
			`${fruitName}을(를) 장바구니에 담았습니다. 총 ${productCounts[fruitName]}개 `,
		);
	});
});
