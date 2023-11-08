import React, { useState } from "react";
import InputForm from "./components/InputForm";

import "./styles/Editor.css";
import "./styles/Preview.css";

function App() {
	const formTypes = ["general", "education", "experience", "projects"];
	const [genData, setGenData] = useState({});
	const [eduData, setEduData] = useState({});
	const [expData, setExpData] = useState({});
	const [projData, setProjData] = useState({});
	const [formCounts, setFormCounts] = useState({
		general: 1,
		education: 1,
		experience: 1,
		projects: 1,
	});

	const stateSelector = (formType) => {
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

	const addForm = (formType) => {
		setFormCounts((prevCounts) => ({
			...prevCounts,
			[formType]: prevCounts[formType] + 1,
		}));
	};

	return (
		<>
			<div className="editor-container">
				{formTypes.map((formType) => (
					<div key={formType}>
						{[...Array(formCounts[formType])].map((_, index) => (
							<InputForm
								key={`${formType}-${index}`}
								formType={formType}
								setData={stateSelector(formType)}
							/>
						))}
						{formType !== "general" && (
							<button onClick={() => addForm(formType)}>
								{"+" + formType}
							</button>
						)}
					</div>
				))}
			</div>

			<div className="preview-container">
        <div className="preview-page">
          <h2>General Information</h2>
          {Object.values(genData).map((gen, id) => (
            <div key={id}>
              <p>Name: {gen["Full Name"]}</p>
              <p>Email: {gen.Email}</p>
			  <p>Phone Number: {gen["Phone Number"]}</p>
            </div>
          ))}

          <h2>Education</h2>
          {Object.values(eduData).map((edu, id) => (
            <div key={id}>
              <p>Institution: {edu.Institution}</p>
              <p>Degree: {edu.Degree}</p>
              <p>Start Date: {edu["Start Date"]}</p>
              <p>End Date: {edu["End Date"]}</p>
              <p>Location: {edu.Location}</p>
            </div>
          ))}

          <h2>Experience</h2>
          {Object.values(expData).map((exp, id) => (
            <div key={id}>
              <p>Company: {exp.Company}</p>
              <p>Position: {exp.Position}</p>
			  <p>Start Date: {exp["Start Date"]}</p>
              <p>End Date: {exp["End Date"]}</p>
              <p>Location: {exp.Location}</p>
			  <p>Description: {exp.Description}</p>
            </div>
          ))}

          <h2>Projects</h2>
          {Object.values(projData).map((proj, id) => (
            <div key={id}>
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
