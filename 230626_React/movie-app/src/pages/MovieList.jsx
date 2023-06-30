import React from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";

const MovieList = ({ movies, loading }) => {
	return (
		<StyleMain>
			{loading ? <LoginMessage> Loading... </LoginMessage> : ""}

			<StyleMovieList>
				{movies.map((movie) => (
					<StyleMovieListItem key={movie.id}>
						<StyleLink
							to={`/movieDetail/${movie.id}`}
							state={{ data: movie }}
							// state={{ data: movie.description }}
							// state={{ data: "테스트" }}
						>
							<TopInfo>
								<img src={movie.medium_cover_image} alt={movie.title} />
							</TopInfo>
							<BtmInfo>
								<strong>{movie.title}</strong>
								<GenresRate>
									<span>{movie.genres[0]}</span>
									<span>⭐️ {movie.rating}</span>
								</GenresRate>
							</BtmInfo>
						</StyleLink>
					</StyleMovieListItem>
				))}
			</StyleMovieList>
		</StyleMain>
	);
};

const StyleMain = styled.main``;

// 로딩 텍스트
const LoginMessage = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 60px;
	width: 100vw;
	height: 100vh;
	background: #ddd;
	opacity: 0.5;
`;

const StyleMovieList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
	width: 1200px;
	margin: 0 auto;
	padding: 100px 0;
`;

const StyleMovieListItem = styled.li`
	width: 230px;
	margin-bottom: 20px;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0px 0px 4px 1px #d6d6d673;
	transition: 0.3s all;

	&:hover {
		box-shadow: 0px 0px 8px 1px #b0b0b073;
		transition: 0.3s all;
	}
`;

const StyleLink = styled(Link)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-decoration: none;
`;

// 영화 썸네일
const TopInfo = styled.div`
	background-color: #98989826;
	width: 100%;
	height: 345px;
`;

// 영화 텍스트
const BtmInfo = styled.div`
	padding: 12px 8px;
	color: #333;

	> strong {
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		font-weight: bold;
	}
`;

const GenresRate = styled.div`
	display: flex;
	padding: 8px 0 0;
	font-size: 14px;
	align-items: baseline;

	> span:nth-child(1)::after {
		content: "";
		display: inline-block;
		width: 1px;
		height: 12px;
		margin: 0 6px 0 8px;
		position: relative;
		top: 1px;
		background: #ddd;
	}
`;

export default MovieList;
