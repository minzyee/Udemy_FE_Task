const loginForm = document.querySelector("#login-form"); // 로그인 폼 요소
const loginInput = document.querySelector("#login-form input"); // 이름 입력 필드
const greeting = document.querySelector("#greeting"); // 환영 메세지 요소

const HIDDEN_CLASSNAME = "hidden"; // 숨김 표시를 위한 클래스
const USERNAME_KEY = "username"; // 로컬 스토리지에서 사용할 키

// 로그인 폼 제출 시 실행될 콜백함수
function onLoginSubmit(event) {
	event.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME); // 로그인 시, 로그인 폼을 숨김

	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username); // 사용자가 입력한 이름을 로컬스토리지에 셋팅함
	paintGreetings(username); // 사용자의 이름값이 담긴 환영 메세지 표시
}

// 환영 메세지를 표시하는 기능
function paintGreetings(username) {
	greeting.innerText = `☘️ 안녕하세요. ${username}님 ☘️`;
	greeting.classList.remove(HIDDEN_CLASSNAME); // 환영 메세지 요소 숨김 해제
}

// 로컬스토리지에 저장된 이름을 가져온다.
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 저장된 이름이 없다면, 로그인 폼을 표시하고
if (savedUsername === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	// 저장된 이름이 있다면, 환영 메세지를 표시한다.
	paintGreetings(savedUsername);
}
