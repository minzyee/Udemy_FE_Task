import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

const Detail = () => {
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState();
	const { id } = useParams();

	const getMovie = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setLoading(false);
		setMovie(json.data.movie);
	};

	useEffect(() => {
		getMovie();
	}, []);

	return (
		<>
			{loading ? (
				<LoginMessage> Loading... </LoginMessage>
			) : (
				<StyleSection>
					<BackgroundCover bgcoverimg={movie.background_image_original}>
						<LeftBox>
							<img src={movie.large_cover_image} alt={movie.title} />
						</LeftBox>
						<RightBox>
							<Title>{movie.title}</Title>
							<Summary>{movie.description_full}</Summary>
						</RightBox>
					</BackgroundCover>
				</StyleSection>
			)}
		</>
	);
};

const StyleSection = styled.section`
	height: 100vh;
`;

const BackgroundCover = styled.div`
	display: flex;
	justify-content: space-between;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	margin-top: 60px;
	background-image: ${({ bgcoverimg }) => `url(${bgcoverimg})`};
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	background-attachment: fixed;
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
	width: 35%;
	display: flex;
	align-items: center;
	justify-content: center;

	> img {
		display: block;
		width: 350px;
		height: auto;
		padding: 10px;
		background-color: #eee;
	}
`;

const RightBox = styled.div`
	width: 65%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 80px;
	color: #fff;
`;

const Title = styled.h2`
	font-size: 30px;
	padding-bottom: 10px;
	border-bottom: 1px solid #fff;
	margin-bottom: 15px;
	font-weight: bold;
`;

const Summary = styled.p`
	line-height: 24px;

	/* 여러줄 말줄임 */
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 20;
`;

export default Detail;
