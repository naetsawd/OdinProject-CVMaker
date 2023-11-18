import React, { useState } from "react";
import formItemData from "../assets/formData.json";
import "../styles/InputForm.css";
import collapseIcon from "../assets/collapse.png";
import addIcon from "../assets/add.png";

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

	const collapseForm = (index) => {
		setFormsList((prevFormsList) => {
			const updatedFormsList = prevFormsList.map((form, i) =>
				i === index ? { ...form, isVisible: !form.isVisible } : form
			);
			return updatedFormsList;
		});
	};

	return (
		<>
			{formsList.map((form, index) => (
				<div key={index} className="input-card">
					<div className="form-banner" onClick={() => collapseForm(index)}>
						<h2>{formTitle}</h2>
						<img
							className={!form.isVisible ? "" : "rotate"}
							src={collapseIcon}
							alt="Expand or Collapse Form"
						/>
					</div>

					<form
						className={`input-form ${!form.isVisible ? "collapsed" : ""}`}
						onSubmit={(e) => handleSubmit(index, e)}
					>
						{formItems.map((formItem) => (
							<React.Fragment key={formItem.title}>
								<label>{formItem.title}</label>
								{formItem.title === "Description" ? (
									<textarea
										required
										placeholder={formItem.placeholder}
										value={form[formItem.title] || ""}
										onChange={(e) =>
											handleChange(index, formItem.title, e.target.value)
										}
									/>
								) : (
									<input
										required
										placeholder={formItem.placeholder}
										type={formItem.type}
										value={form[formItem.title] || ""}
										onChange={(e) =>
											handleChange(index, formItem.title, e.target.value)
										}
									/>
								)}
							</React.Fragment>
						))}

						<div className="form-buttons">
							<button type="submit">Update</button>
							{index !== 0 && (
								<button onClick={() => delForm(index)}>Remove</button>
							)}
						</div>
					</form>
				</div>
			))}
			{formType !== "general" && (
				<div className="add-form-button" onClick={addForm}>
					<img src={addIcon} alt={"Add" + formTitle} />
					<p>{formType}</p>
				</div>
			)}
		</>
	);
}

export default InputForm;
