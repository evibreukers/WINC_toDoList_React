import React from "react";

function Image(props) {
  const displayImage = props.displayImage ? "block" : "none";
  return (
    <div className="randomImage-panel" style={{ display: displayImage }}>
      <img className="randomImage" src={props.image} alt="problem?" />
      <button className="randomImage-closeBtn" onClick={props.closeNewImg}>
        X
      </button>
    </div>
  );
}

export default Image;
