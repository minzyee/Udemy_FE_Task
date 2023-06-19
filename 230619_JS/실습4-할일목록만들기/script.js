const form = document.querySelector(".todo-insert");
const todoInput = form.querySelector(
	'input[placeholder="할 일을 입력하세요."]',
);

form.addEventListener("submit", (event) => {
	// 폼 제출 이벤트의 기본 동작 방지
	event.preventDefault();

	// 투두 인풋에 입력한 값 가져오기
	const todoValue = todoInput.value;

	// 입력 값이 빈 문자열인 경우 처리하지 않음
	if (todoValue.trim() === "") {
		return;
	}

	// 새로운 리스트 요소 생성
	const newTodo = document.createElement("li");
	const todoText = document.createElement("p");
	const removeBtn = document.createElement("button");
	removeBtn.classList.add("remove");

	// 삭제 버튼의 텍스트 설정
	removeBtn.textContent = "삭제";

	removeBtn.addEventListener("click", () => {
		newTodo.remove(); // 삭제 버튼 클릭 시 해당 투두 아이템 제거
	});

	todoText.textContent = todoValue;
	newTodo.appendChild(todoText);
	newTodo.appendChild(removeBtn);

	// 입력 필드 초기화
	form.reset();

	const todoList = document.querySelector(".todo-list");
	todoList.appendChild(newTodo);
});
