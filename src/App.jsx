import { useState } from "react";

import InputForm from "./components/InputForm";

import "./styles/Editor.css";
import "./styles/Preview.css";

function App() {
	const formTypes = ["general", "education", "experience", "projects"];

	return (
		<>
			<div className="editor-container">
				{formTypes.map((formType) => (
					<InputForm formType={formType} />
				))}
			</div>

			<div className="preview-container">
				<div className="preview-page"></div>
			</div>
		</>
	);
}

export default App;