import React from "react";

function StickyNote(props) {
  return (
    <div
      className="sticky-note"
      id={props.id}
      style={{ backgroundColor: props.color }}
    >
      <div className="noteHeader">
        <p className="changeColorBtn" onClick={props.handleColorChange}>
          new color
        </p>
        <p className="deleteNoteBtn" onClick={props.handleDelete}>
          X
        </p>
      </div>
      <textarea>{props.text}</textarea>
    </div>
  );
}

export default StickyNote;
