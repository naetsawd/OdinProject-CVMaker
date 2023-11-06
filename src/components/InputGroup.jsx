import React from "react";

function InputGroup(props) {
  const items = props.formItems;

  return (
    <>
      {items.map((item) => (
        <div key={item.key} className="input-group">
          <label>{item.title}:</label>
          <input type={item.type} placeholder={item.placeholder} />
        </div>
      ))}
    </>
  );
}

export default InputGroup;