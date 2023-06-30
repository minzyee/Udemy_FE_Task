import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
	const navigate = useNavigate();
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = (e) => {
		e.preventDefault();
		// navigate(`search?query=${searchQuery}`);
	};

	const handleChange = (e) => {
		setSearchQuery(e.target.value);
		console.log(e.target.value);
	};

	return (
		<StyledNav>
			<StyleUl>
				<li>
					<StyleLink to="/">Movie Home</StyleLink>
				</li>
				<li>
					{/* 입력 시, 자동 검색어 보여주기 */}
					<StyleInput
						type="text"
						onChange={handleChange}
						value={searchQuery}
						placeholder="영화를 검색하세요."
					/>
					<StyleButton type="button" onClick={handleSearch}>
						검색
					</StyleButton>
				</li>
			</StyleUl>
		</StyledNav>
	);
};

const StyledNav = styled.nav`
	background: #5b17ff;
	width: 100%;
	margin: 0 auto;
	position: sticky;
	top: 0;
	z-index: 999;
`;

const StyleUl = styled.ul`
	width: 1000px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StyleLink = styled(Link)`
	display: flex;
	align-items: center;
	height: 60px;
	font-size: 22px;
	font-weight: bold;
	color: #fff;
`;

const StyleInput = styled.input`
	width: 250px;
	padding: 10px;
	border-bottom: 1px solid #fff;
	color: #fff;

	&::placeholder {
		color: #fff;
	}
`;

const StyleButton = styled.button`
	width: 50px;
	padding: 10px;
	color: #fff;
	border: 1px solid #fff;
	border-radius: 4px;
	margin-left: 4px;
`;

export default Navigation;
