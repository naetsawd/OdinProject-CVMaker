import React, { useState } from "react";
import InputForm from "./components/InputForm";
import SectionPreview from "./components/SectionPreview";

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
				{formTypes.map((formType) => (
					<React.Fragment key={formType + "-input"}>
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
					{formTypes.map((formType) => (
						<>
							<React.Fragment key={formType + "-preview"}>
								<SectionPreview
									key={formType}
									formType={formType}
									formData={stateSelector(formType)}
								/>
							</React.Fragment>
						</>
					))}
				</div>
			</div>
		</>
	);
}

export default App;
