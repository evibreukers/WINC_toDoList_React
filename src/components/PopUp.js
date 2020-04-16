import React from "react";

function PopUp(props) {
  const popupState = props.popupState ? "block" : "none";
  return (
    <div className="popUp" style={{ display: popupState }}>
      <img
        className="folderClosed"
        src={require("../assets/img/popup.png")}
        alt="problem?"
      />
      <div className="noteInput">
        <p className="closePopup" onClick={props.closePopup}>
          X
        </p>
        <input
          name="noteText"
          className="noteText"
          type="text"
          placeholder="write note"
          onChange={props.handleInput}
        />
        <button className="addNoteButton" onClick={props.handleSubmit}>
          ADD NOTE
        </button>
      </div>
    </div>
  );
}

export default PopUp;
