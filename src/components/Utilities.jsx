import React from "react";

import infoIcon from "../assets/info.png";
import downloadIcon from "../assets/download.png";

import "../styles/Utilities.css";

function Utilities() {
	return (
		<div className="utilities-container">
			<div className="utilities-card">
				<img src={infoIcon} className="utility-button"></img>
				<img src={downloadIcon} className="utility-button"></img>
			</div>
		</div>
	);
}

export default Utilities;
