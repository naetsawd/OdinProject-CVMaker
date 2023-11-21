import { useState, React } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import infoIcon from "../assets/info.png";
import downloadIcon from "../assets/download.png";

import "../styles/Utilities.css";

function Utilities({ setIsModalVisible }) {
	const showModal = () => {
		setIsModalVisible(true);
	};

	function downloadPDF() {
		const element = document.getElementById("download-div");
		html2canvas(element).then((canvas) => {
			const imgData = canvas.toDataURL("image/png");
			const pdf = new jsPDF();
			const imgProps = pdf.getImageProperties(imgData);
			const pdfWidth = pdf.internal.pageSize.getWidth();
			const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
			pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
			pdf.save("Sample Resume.pdf");
		});
	}

	return (
		<div className="utilities-container">
			<div className="utilities-card">
				<img
					src={infoIcon}
					className="utility-button"
					onClick={showModal}
				></img>
				<img
					src={downloadIcon}
					className="utility-button"
					onClick={downloadPDF}
				></img>
			</div>
		</div>
	);
}

export default Utilities;
