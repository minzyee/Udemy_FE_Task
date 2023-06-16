let num1 = 0;
let operator = 0;
let num2 = 0;
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");

const onClickNumber = (event) => {
	if (!operator) {
		num1 += event.target.textContent;
		$result.value += event.target.textContent;
		return;
	}

	// 이 아래로는 operator가 존재하는 경우에만 실행된다.
	if (!num2) {
		$result.value = ""; // 숫자1과 숫자2 합쳐짐 방지를 위한 초기화 작업
	}
	num2 += event.target.textContent;
	$result.value += event.target.textContent;
};

const onClickOperator = (opBtn) => () => {
	if (num1) {
		operator = opBtn;
		$operator.value = opBtn;
	} else {
		alert("숫자를 먼저 입력하세요.");
	}
};

// 피연산자 버튼
document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-1").addEventListener("click", onClickNumber);
document.querySelector("#num-2").addEventListener("click", onClickNumber);
document.querySelector("#num-3").addEventListener("click", onClickNumber);
document.querySelector("#num-4").addEventListener("click", onClickNumber);
document.querySelector("#num-5").addEventListener("click", onClickNumber);
document.querySelector("#num-6").addEventListener("click", onClickNumber);
document.querySelector("#num-7").addEventListener("click", onClickNumber);
document.querySelector("#num-8").addEventListener("click", onClickNumber);
document.querySelector("#num-9").addEventListener("click", onClickNumber);

// 연산자 버튼
document.querySelector("#plus").addEventListener("click", onClickOperator("+"));
document
	.querySelector("#minus")
	.addEventListener("click", onClickOperator("-"));
document
	.querySelector("#divide")
	.addEventListener("click", onClickOperator("/"));
document
	.querySelector("#multiply")
	.addEventListener("click", onClickOperator("*"));

// 계산하기
document.querySelector("#calculate").addEventListener("click", () => {
	if (num2) {
		switch (operator) {
			case "+":
				$result.value = parseInt(num1) + parseInt(num2);
				break;

			case "-":
				$result.value = parseInt(num1) - parseInt(num2);
				break;

			case "*":
				$result.value = parseInt(num1) * parseInt(num2);
				break;

			case "/":
				$result.value = parseInt(num1) / parseInt(num2);
				break;

			default:
				break;
		}
	} else {
		alert("숫자를 먼저 입력하세요.");
	}
});
