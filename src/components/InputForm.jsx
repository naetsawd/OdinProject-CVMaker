import { useState } from "react";

import InputGroup from "./InputGroup";
import formItemData from "../assets/formData.json";

import "../styles/InputForm.css";

function InputForm({ previewUpdate, formType }) {

	const { cardTitle, formItems } = formItemData[formType] || {
		cardTitle: "Default",
		formItems: [],
	};

	const [formData, setFormData] = useState({});

	const handleInputChange = (title, value) => {
		setFormData((prevData) => ({ ...prevData, [title]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		previewUpdate(formType, [cardTitle, formData]);
	};

	return (
		<>
			<form className="input-card" onSubmit={handleSubmit}>
				<h2>{cardTitle}</h2>
				<InputGroup formItems={formItems} onInputChange={handleInputChange} />
				<button className="submit-input">Update</button>
			</form>
		</>
	);
}

export default InputForm;
