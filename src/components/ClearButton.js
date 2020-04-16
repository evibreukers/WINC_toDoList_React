import React from "react";

function ClearButton(props) {
  return (
    <div>
      <button className="clearTasksBtn" onClick={props.handleClearAll}>
        CLEAR ALL
      </button>
    </div>
  );
}

export default ClearButton;
