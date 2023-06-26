import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "pages/Home";
import About from "pages/About";
import Profile from "pages/Profile";
import SearchResult from "pages/SearchResult";

// Route는 url의 경로(path)를 알려주는 것
// Link는 url 클릭 시 해당 경로로 이동할 수 있게 해준다. html의 <a href=''>와 같은 것
// Link는 react-router-dom에서 가져온 라이브러리이다.

// 그렇다면 a를 쓰면 안되는 이유는? --> 페이지 새로고침이 진행되면서 기존의 state가 날아간다.
// a대신 Link를 사영해야하는 이유는?
// 모듈 css를 import 할 때 styles를 매번 붙여줘야 하는 이유는?

function App() {
	return (
		<>
			<Router>
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/profiles/:username" element={<Profile />} />
					<Route path="/search" element={<SearchResult />} />
					{/* search에 대한 Route */}
				</Routes>

				<Footer />
			</Router>
		</>
	);
}

export default App;
