import { useState } from "react";

import InputForm from "./components/InputForm";

import "./styles/Editor.css";
import "./styles/Preview.css";

function App() {
	const formTypes = ["general", "education", "experience", "projects"];
	const [previewData, setPreviewData] = useState({});

	const previewUpdate = (formType, formData) => {
		setPreviewData((prevData) => {
			const updatedData = { ...prevData };

			if (updatedData[formType]) {
				updatedData[formType] = updatedData[formType].map((item) => {
					if (item.cardTitle === formData[0]) {
						return { cardTitle: formData[0], data: formData[1] };
					}
					return item;
				});
			} else {
				updatedData[formType] = [
					...(updatedData[formType] || []),
					{ cardTitle: formData[0], data: formData[1] },
				];
			}

			return updatedData;
		});
		console.log(previewData.education[0].data);
	};

	return (
		<>
			<div className="editor-container">
				{formTypes.map((formType) => (
					<InputForm
						key={formType}
						previewUpdate={previewUpdate}
						formType={formType}
					/>
				))}
			</div>

			<div className="preview-container">
				<div className="preview-page">
					<div className="general-info">
						<div>{previewData.general?.[0]?.cardTitle}</div>
						<div>{previewData.general?.[0]?.data?.["Full name"]}</div>
						<div>{previewData.general?.[0]?.data?.Email}</div>
						<div>{previewData.general?.[0]?.data?.["Phone Number"]}</div>
					</div>
					<div className="education">
						<div>{previewData.education?.[0]?.cardTitle}</div>
						<div>{previewData.education?.[0]?.data?.Institution}</div>
						<div>{previewData.education?.[0]?.data?.Degree}</div>
						<div>{previewData.education?.[0]?.data?.["Start Date"]}</div>
						<div>{previewData.education?.[0]?.data?.["End Date"]}</div>
						<div>{previewData.education?.[0]?.data?.Location}</div>
					</div>
					<div className="experience">
						<div>{previewData.experience?.[0]?.cardTitle}</div>
						<div>{previewData.experience?.[0]?.data?.["Company Name"]}</div>
						<div>{previewData.experience?.[0]?.data?.["Position Title"]}</div>
						<div>{previewData.experience?.[0]?.data?.["Start Date"]}</div>
						<div>{previewData.experience?.[0]?.data?.["End Date"]}</div>
						<div>{previewData.experience?.[0]?.data?.Location}</div>
						<div>{previewData.experience?.[0]?.data?.Description}</div>
					</div>
					<div className="projects">
						<div>{previewData.projects?.[0]?.cardTitle}</div>
						<div>{previewData.projects?.[0]?.data?.["Project Title"]}</div>
						<div>{previewData.projects?.[0]?.data?.Description}</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
