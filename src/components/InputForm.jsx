import { useState } from "react";

import "../styles/InputForm.css";
import InputGroup from "./InputGroup";

function InputForm({ previewUpdate, formType }) {
	const formItemData = {
		general: {
			cardTitle: "General Information",
			formItems: [
				{
					key: 1,
					title: "Full name",
					placeholder: "First and last name",
					type: "text",
				},
				{
					key: 2,
					title: "Email",
					placeholder: "Work/personal email address",
					type: "email",
				},
				{
					key: 3,
					title: "Phone Number",
					placeholder: "Work/personal phone number",
					type: "tel",
				},
			],
		},
		education: {
			cardTitle: "Education",
			formItems: [
				{
					key: 4,
					title: "Institution",
					placeholder: "School/University",
					type: "text",
				},
				{
					key: 5,
					title: "Degree",
					placeholder: "Degree/Field of study",
					type: "text",
				},
				{
					key: 6,
					title: "Start Date",
					placeholder: "Start Date",
					type: "text",
				},
				{ key: 7, title: "End Date", placeholder: "End Date", type: "text" },
				{ key: 8, title: "Location", placeholder: "Location", type: "text" },
			],
		},
		experience: {
			cardTitle: "Experience",
			formItems: [
				{
					key: 9,
					title: "Company Name",
					placeholder: "Company name",
					type: "text",
				},
				{
					key: 10,
					title: "Position Title",
					placeholder: "Position Title",
					type: "text",
				},
				{
					key: 11,
					title: "Start Date",
					placeholder: "Start Date",
					type: "text",
				},
				{ key: 12, title: "End Date", placeholder: "End Date", type: "text" },
				{ key: 13, title: "Location", placeholder: "Location", type: "text" },
				{
					key: 14,
					title: "Description",
					placeholder: "Role description",
					type: "text",
				},
			],
		},
		projects: {
			cardTitle: "Projects",
			formItems: [
				{
					key: 15,
					title: "Project Title",
					placeholder: "Company name",
					type: "text",
				},
				{
					key: 16,
					title: "Description",
					placeholder: "Role description",
					type: "text",
				},
			],
		},
	};

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
