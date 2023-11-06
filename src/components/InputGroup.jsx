import React from "react";

function InputGroup({ formItems, onInputChange }) {
  return (
    <>
      {formItems.map((item) => (
        <div key={item.key} className="input-group">
          <label>{item.title}:</label>
          <input
            type={item.type}
            placeholder={item.placeholder}
            onChange={(e) => onInputChange(item.key, e.target.value)}
          />
        </div>
      ))}
    </>
  );
}

export default InputGroup;