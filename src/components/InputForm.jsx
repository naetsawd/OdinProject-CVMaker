import React, { useState, useEffect } from "react";
import formItemData from "../assets/formData.json";
import "../styles/InputForm.css";

function InputForm({ formKey, formType, setData }) {
	const { formTitle, formItems } = formItemData[formType] || {
		cardTitle: "Default",
		formItems: [],
	};

	const [formData, setFormData] = useState({});
	const [uid, setUid] = useState("");

	useEffect(() => {
		setUid(formKey);
	}, []);

	const handleInputChange = (title, value) => {
		setFormData((prevData) => ({
			...prevData,
			[title]: value,
		}));
	};

	const handleUpdate = (e) => {
		e.preventDefault();
		const formDataWithId = { [uid]: formData };
		console.log(formDataWithId);
		setData((prevData) => ({ ...prevData, ...formDataWithId }));
	};

	return (
		<>
			<form className="input-form" onSubmit={handleUpdate}>
				<h2>{formTitle}</h2>
				{formItems.map((formItem) => (
					<div key={formItem.title}>
						<label>{formItem.title}</label>
						<input
							required
							placeholder={formItem.placeholder}
							type={formItem.type}
							onChange={(e) =>
								handleInputChange(formItem.title, e.target.value)
							}
						/>
					</div>
				))}
				<button type="submit">Update</button>
			</form>
		</>
	);
}

export default InputForm;
