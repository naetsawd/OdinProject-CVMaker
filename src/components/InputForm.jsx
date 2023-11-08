import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import formItemData from "../assets/formData.json";
import "../styles/InputForm.css";

function InputForm({ formType, setData }) {
	const { formTitle, formItems } = formItemData[formType] || {
		cardTitle: "Default",
		formItems: [],
	};

	const [formData, setFormData] = useState({});
	const [uid, setUid] = useState('');

	useEffect(() => {
		// Generate the unique ID once when the component is mounted
		setUid(uuidv4());
	}, []);

	const handleInputChange = (title, value) => {
		setFormData((prevData) => ({
			...prevData,
			[title]: value,
		}));
	};

	const handleUpdate = (e) => {
		e.preventDefault();
		const formDataWithId = { [uid]: formData }; // Use uid as the key
		console.log(formDataWithId);
		setData((prevData) => ({ ...prevData, ...formDataWithId }));
	};

	return (
		<>
			<form className="input-form">
				<h2>{formTitle}</h2>
				{formItems.map((formItem) => (
					<div key={formItem.title}>
						<label>{formItem.title}</label>
						<input
							placeholder={formItem.placeholder}
							type={formItem.type}
							onChange={(e) =>
								handleInputChange(formItem.title, e.target.value)
							}
						/>
					</div>
				))}
				<button onClick={handleUpdate}>Update</button>
			</form>
		</>
	);
}

export default InputForm;
