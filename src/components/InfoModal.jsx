import React from "react";

import addIcon from "../assets/add.png";

import "../styles/InfoModal.css";

function InfoModal({ isModalVisible, setIsModalVisible }) {
	const closeModal = (e) => {
		e.stopPropagation();
		setIsModalVisible(false);
	};

	return (
		<div
			className={`info-modal-container ${isModalVisible ? "visible" : ""}`}
			onClick={closeModal}
		>
			<div className="modal-card" onClick={(e) => e.stopPropagation()}>
				<div className="modal-banner">
					<h2>Information</h2>
					<img src={addIcon} onClick={closeModal} />
				</div>
			</div>
		</div>
	);
}

export default InfoModal;
