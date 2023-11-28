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

				<ul className="modal-list">
					<li>This is a resume planner/prototype maker</li>
					<li>The resume is limited to one page since that is the ideal length</li>
					<li>
						You should make sure to provide the right amount of information and
						include key terms and skills for the target job
					</li>
					<li>
						Use the STAR method when talking about experience and projects
					</li>
				</ul>
			</div>
		</div>
	);
}

export default InfoModal;
