import React from "react";
import { styled } from "styled-components";
import { useLocation } from "react-router-dom";

const MovieDetail = ({ loading }) => {
	const location = useLocation();
	const movieObjData = location.state.data;
	// const movieData = Object(movieObjData);
	console.log("제발나와라아 아마도 영화 객체: ", movieObjData);
	// console.log("아마도 영화 요소: ", movieData);

	// todo
	// useParams() 사용해서 id 따온 다음에 데이터패칭 하기
	// MovieDetail 페이지를 클릭해서 들어간다은 문제없지만, 그냥 다른 경로로 들어가면 문제가 있기 때문

	return (
		<>
			{loading ? <LoginMessage> Loading... </LoginMessage> : null}

			<StyleSection>
				{/* <p>프로덕트 id: {movieData}</p> */}
				{/* <p>프로덕트 id: {movieData.medium_cover_image}</p> */}
				{/* <p>프로덕트 id: {movieData.id}</p> */}

				<LeftBox>
					<img src={movieObjData.large_cover_image} alt={movieObjData.title} />
				</LeftBox>
				<RightBox>
					<Title>{movieObjData.title}</Title>
					<Summary>{movieObjData.summary}</Summary>
				</RightBox>
			</StyleSection>
		</>
	);
};

const StyleSection = styled.section`
	display: flex;
	justify-content: space-between;
	height: 100vh;
`;

const LoginMessage = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 60px;
	width: 100vw;
	height: 100vh;
	background: #ddd;
	opacity: 0.4;
`;

const LeftBox = styled.div`
	background: pink;
	width: 35%;
	display: flex;
	align-items: center;
	justify-content: center;

	> img {
		display: block;
		width: 350px;
		height: auto;
		padding: 20px;
	}
`;

const RightBox = styled.div`
	background: skyblue;
	width: 65%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 80px;
`;

const Title = styled.h2`
	font-size: 30px;
	padding-bottom: 10px;
	border-bottom: 1px solid #333;
	margin-bottom: 15px;
	font-weight: bold;
`;

const Summary = styled.p`
	line-height: 22px;
	color: #333;
`;

export default MovieDetail;
