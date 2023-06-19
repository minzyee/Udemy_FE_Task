const form = document.querySelector(".chat");
const userNameInput = form.querySelector('input[placeholder="사용자명"]');
const messageInput = form.querySelector(
	'input[placeholder="메세지를 입력하세요."]',
);
const chatList = document.querySelector(".user-talk");

form.addEventListener("submit", (event) => {
	event.preventDefault(); // 폼 제출 이벤트의 기본 동작 방지

	// 사용자명과 메시지 입력값 가져오기
	const userName = userNameInput.value;
	const message = messageInput.value;

	// 입력값이 빈 문자열인 경우 처리하지 않음
	if (userName.trim() === "" || message.trim() === "") {
		return;
	}

	// 현재 시간 가져오기
	const currentTime = new Date();
	const hours = currentTime.getHours().toString().padStart(2, "0");
	const minutes = currentTime.getMinutes().toString().padStart(2, "0");
	const timeString = `${hours}:${minutes}`;

	// 새로운 대화 요소 생성
	const newChat = document.createElement("li");
	const userNameElement = document.createElement("strong");
	const messageElement = document.createElement("p");
	const timeElement = document.createElement("span");

	userNameElement.textContent = userName;
	messageElement.textContent = message;
	timeElement.textContent = timeString;

	newChat.appendChild(userNameElement);
	newChat.appendChild(messageElement);
	newChat.appendChild(timeElement);

	chatList.appendChild(newChat);

	// 입력 필드 초기화
	userNameInput.value = "";
	messageInput.value = "";
});
