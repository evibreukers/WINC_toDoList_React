import React from "react";

function ToDoItem(props) {
  return (
    <li className="item" id={props.id}>
      <div className="inputWrapper1">
        <input
          type="checkbox"
          onChange={props.handleInput}
          checked={props.isChecked}
        />
        <p className="item-title">{props.title}</p>
      </div>

      <div className="inputWrapper2">
        <p className="item-date">{props.date}</p>
        <button className="deleteTaskBtn" onClick={props.handleDelete}>
          DELETE
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
