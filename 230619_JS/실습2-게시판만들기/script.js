// 게시글의 정보가 담긴 객체
const posts = [
	{ title: "첫 번째 게시글", content: "안녕하세요!" },
	{ title: "두 번째 게시글", content: "반갑습니다!" },
];

// 게시판 영역과 목록 선택
const board = document.querySelector(".js");
const boardList = board.querySelector(".board-list");

// 게시물 목록 생성
posts.forEach((post) => {
	const listItem = document.createElement("li");
	const title = document.createElement("h3");
	const content = document.createElement("p");

	// 생성한 요소의 텍스트 노드에 posts 객체에서 데이터 바인딩하기
	title.textContent = post.title;
	content.textContent = post.content;

	listItem.append(title);
	listItem.append(content);
	boardList.append(listItem);
});
