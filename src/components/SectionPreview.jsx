import React from "react";
import "../styles/SectionPreview.css";

function SectionPreview({ formType, formData }) {
	return (
		<>
			<div className={`${formType}-sections-container sections-container-margins`} key={formType}>
				{formData.length > 0 && formType !== "general" && (
					<>
						<h3 className="section-title">{formType.toUpperCase()}</h3>
						{formType !== "projects" && <div className="divider"></div>}
					</>
				)}
				{formData.map((data, index) => (
					<div className={formType + "-section"} key={index}>
						{Object.entries(data.formData).map(([key, value]) => (
							<p key={key}>
								{formType === "general" && key === "LinkedIn Profile" ? (
									<a href={value} target="_blank">
										LinkedIn
									</a>
								) : (
									value
								)}
							</p>
						))}
					</div>
				))}
			</div>
		</>
	);
}

export default SectionPreview;
