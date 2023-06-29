import React from "react";
import { styled } from "styled-components";

const Footer = () => {
	return <StyleFooter>&copy; minzyee</StyleFooter>;
};

const StyleFooter = styled.footer`
	background: #cccccc2e;
	width: 100%;
	padding: 60px 0;
	text-align: center;
	color: #ccc;
`;

export default Footer;
