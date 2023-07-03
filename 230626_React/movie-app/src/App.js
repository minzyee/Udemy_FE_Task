import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "routes/Home";
import Detail from "routes/Detail";

function App() {
	return (
		<>
			<Router>
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/movie/:id" element={<Detail />} />
				</Routes>
				<Footer />
			</Router>
			<GlobalStyles />
		</>
	);
}

export default App;
