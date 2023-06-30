import React, { useEffect, useState } from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";
import SearchResults from "./pages/SearchResults";
import { movieDataFetch } from "./services/api";

function App() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const moviesData = await movieDataFetch();
			setMovies(moviesData);
			setLoading(false);
		};

		fetchData();
	}, []);

	return (
		<>
			<Router>
				<Navigation />
				<Routes>
					{/* <Route path="/" element={<Home />} /> */}
					<Route
						path="/"
						element={<MovieList movies={movies} loading={loading} />}
					/>
					<Route
						path="/movieDetail/:id"
						element={<MovieDetail loading={loading} />}
					/>
					<Route path="/search" element={<SearchResults />} />
				</Routes>
				<Footer />
			</Router>
			<GlobalStyles />
		</>
	);
}

export default App;
