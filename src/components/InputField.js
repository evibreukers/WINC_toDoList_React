import React from "react";

function InputField(props) {
  return (
    <div className="input-panel">
      <input
        name="inputTask"
        className="inputTask"
        type="text"
        onChange={props.handleInput}
        placeholder="task description"
      />
      <input
        name="inputDate"
        className="inputDate"
        type="text"
        onChange={props.handleInput}
        placeholder="end-date"
      />
      <button className="addButton" onClick={props.handleSubmit}>
        ADD ITEM
      </button>
    </div>
  );
}

export default InputField;
