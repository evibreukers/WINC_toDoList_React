import React from "react";

function Image(props) {
  const displayImage = props.displayImage ? "block" : "none";
  return (
    <div className="random-image-panel" style={{ display: displayImage }}>
      <img className="randomImage" src={props.image} alt="problem?" />
      <button className="image-closeBtn" onClick={props.closeNewImg}>
        X
      </button>
    </div>
  );
}

export default Image;
