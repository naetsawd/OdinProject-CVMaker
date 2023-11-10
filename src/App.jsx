import React, { useState } from "react";
import InputForm from "./components/InputForm";

import "./styles/Editor.css";
import "./styles/Preview.css";

function App() {
	const formTypes = ["general", "education", "experience", "projects"];
	const [genData, setGenData] = useState([]);
	const [eduData, setEduData] = useState([]);
	const [expData, setExpData] = useState([]);
	const [projData, setProjData] = useState([]);

	const setStateSelector = (formType) => {
		switch (formType) {
			case "general":
				return setGenData;
			case "education":
				return setEduData;
			case "experience":
				return setExpData;
			case "projects":
				return setProjData;
			default:
				return null;
		}
	};

	const stateSelector = (formType) => {
		switch (formType) {
			case "general":
				return genData;
			case "education":
				return eduData;
			case "experience":
				return expData;
			case "projects":
				return projData;
			default:
				return null;
		}
	};

	return (
		<>
			<div className="editor-container">
				<button onClick={() => console.log(eduData)}>Edu Log</button>
				{formTypes.map((formType) => (
					<React.Fragment key={formType}>
						<InputForm
							key={formType}
							formType={formType}
							setData={setStateSelector(formType)}
						/>
					</React.Fragment>
				))}
			</div>

			<div className="preview-container">
				<div className="preview-page">
					<h2 className="section-title">General Information</h2>
					{Object.values(genData).map((gen, id) => (
						<div className="general-data" key={id}>
							<p>Name: {gen["Full Name"]}</p>
							<p>Email: {gen.Email}</p>
							<p>Phone Number: {gen["Phone Number"]}</p>
						</div>
					))}

					<h2 className="section-title">Education</h2>
					{Object.values(eduData).map((eduItem, index) => (
						<div className="education-data" key={index}>
							<p>Institution: {eduItem.formData.Institution}</p>
							<p>Degree: {eduItem.formData.Degree}</p>
							<p>Start Date: {eduItem.formData["Start Date"]}</p>
							<p>End Date: {eduItem.formData["End Date"]}</p>
							<p>Location: {eduItem.formData.Location}</p>
						</div>
					))}

					<h2 className="section-title">Experience</h2>
					{Object.values(expData).map((exp, id) => (
						<div className="experience-data" key={id}>
							<p>Company: {exp.Company}</p>
							<p>Position: {exp.Position}</p>
							<p>Start Date: {exp["Start Date"]}</p>
							<p>End Date: {exp["End Date"]}</p>
							<p>Location: {exp.Location}</p>
							<p>Description: {exp.Description}</p>
						</div>
					))}

					<h2 className="section-title">Projects</h2>
					{Object.values(projData).map((proj, id) => (
						<div className="project-data" key={id}>
							<p>Project Name: {proj["Project Name"]}</p>
							<p>Description: {proj.Description}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default App;
