import React from "react";
import { styled } from "styled-components";

const Footer = () => {
	return <StyleFooter>&copy; minzyee</StyleFooter>;
};

const StyleFooter = styled.footer`
	background-color: #151515;
	width: 100%;
	padding: 60px 0;
	text-align: center;
	color: #555;
`;

export default Footer;
