import Movie from "components/Movie";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const Home = () => {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`,
			)
		).json();
		setMovies(json.data.movies);
		setLoading(false);
	};

	useEffect(() => {
		getMovies();
	}, []);

	return (
		<>
			<StyleMain>
				{loading ? (
					<LoginMessage> Loading... </LoginMessage>
				) : (
					<StyleMovieList>
						{movies.map((movie) => (
							<Movie
								key={movie.id}
								id={movie.id}
								bgCoverImg={movie.medium_cover_image}
								title={movie.title}
								summary={movie.summary}
								genres={movie.genres}
								rating={movie.rating}
							/>
						))}
					</StyleMovieList>
				)}
			</StyleMain>
		</>
	);
};

const StyleMain = styled.main`
	background-color: #0f0f0f;
`;

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

export default Home;
