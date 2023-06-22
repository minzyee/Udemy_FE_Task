const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

taskForm.addEventListener("submit", (e) => {
	e.preventDefault(); // submit 시, 새로고침 방지

	const task = taskInput.value; // input의 입력필드에 있는 값을 가져온다.

	// task 값이 있다면
	if (task) {
		addTask(task); // task를 추가한다.
		taskInput.value = ""; // 빈칸으로 초기화
	}
});

// taskList에서 클릭 했는데, 그것이 만약 button이라면,
taskList.addEventListener("click", (e) => {
	if (e.target.tagName === "BUTTON") {
		deleteTask(e.target.parentElement); // 그 버튼의 부모요소를 삭제한다(=== li 태그)
	}
});

function addTask(task) {
	// li 요소를 생성하고, task-item 이라는 클래스를 붙여준다.
	const taskItem = document.createElement("li");
	taskItem.classList.add("task-item");
	taskItem.textContent = task;

	const deleteButton = document.createElement("button");
	deleteButton.textContent = "❌";

	taskItem.appendChild(deleteButton); // taskItem(li 태그)에는 삭제 버튼 자식으로 추가.
	taskList.appendChild(taskItem); // taskList(ul 태그)에는 li 리스트를 자식으로 추가.
}

function deleteTask(taskItem) {
	taskList.removeChild(taskItem);
}
