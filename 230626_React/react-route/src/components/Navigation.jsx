import React from "react";
import styles from "../styles/Navigation.module.css";
import { Link } from "react-router-dom"; // Link는 react-router-dom의 라이브러리이다.

const Navigation = () => {
	return (
		<nav className={styles.navigation}>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/profiles">Profile</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
