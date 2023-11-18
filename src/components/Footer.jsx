import React from "react";

import "../styles/Footer.css";

import ghLogo from "../assets/githubLogo.svg";

const Footer = () => {
	return (
		<div className="footer-container">
			<a
				className="gh-logo"
				href="https://github.com/naetsawd/OdinProject-CVMaker"
				target="blank"
			>
				<img src={ghLogo} />
			</a>
			<p className="footer-text">Designed &amp; Built by Dechsit Naetsawan</p>
		</div>
	);
};

export default Footer;
