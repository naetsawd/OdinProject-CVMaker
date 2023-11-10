import React, { useState } from "react";
import formItemData from "../assets/formData.json";
import "../styles/InputForm.css";

function InputForm({ formType, setData }) {
	const { formTitle, formItems } = formItemData[formType] || {
		formTitle: "Default",
		formItems: [],
	};

	const [formsList, setFormsList] = useState([{}]);

	const handleChange = (index, field, value) => {
		const updatedFormsList = formsList.map((form, i) =>
			i === index ? { ...form, [field]: value } : form
		);
		setFormsList(updatedFormsList);
	};

	const handleSubmit = (index, e) => {
		e.preventDefault();
		const formData = formsList[index];
		setData((prevData) => {
			const updatedData = [...prevData];
			updatedData[index] = { formData };
			return updatedData;
		});
	};

	const addForm = () => {
		setFormsList([...formsList, {}]);
	};

	const delForm = (index) => {
		const updatedFormsList = formsList.filter((_, i) => i !== index);
		setFormsList(updatedFormsList);

		setData((prevData) => {
			const updatedData = prevData.filter((_, i) => i !== index);
			return updatedData;
		});
	};

	return (
		<>
			{formsList.map((form, index) => (
				<div key={index} className="input-card">
					<form className="input-form" onSubmit={(e) => handleSubmit(index, e)}>
						<h2>{formTitle}</h2>
						{formItems.map((formItem) => (
							<React.Fragment key={formItem.title}>
								<label>{formItem.title}</label>
								<input
									placeholder={formItem.placeholder}
									type={formItem.type}
									value={form[formItem.title] || ""}
									onChange={(e) =>
										handleChange(index, formItem.title, e.target.value)
									}
								/>
							</React.Fragment>
						))}
						<button type="submit">Update</button>
					</form>
					{formType !== "general" && index !== 0 && (
						<button onClick={() => delForm(index)}>Remove</button>
					)}
					<button onClick={() => console.log(index)}>Index</button>
				</div>
			))}
			{formType !== "general" && (
				<button onClick={addForm}>{"+" + formType}</button>
			)}
		</>
	);
}

export default InputForm;
