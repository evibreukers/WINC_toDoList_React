import React from "react";
import InputField from "./InputField";
import ClearButton from "./ClearButton";
import ToDoItem from "./ToDoItem";

function ToDoListUI(props) {
  const displayItems = props.data.toDoItems.map((task) => {
    return (
      <ToDoItem
        key={task.id}
        id={task.id}
        title={task.title}
        date={task.date}
        isChecked={task.isChecked}
        handleInput={props.handleInput}
        handleDelete={props.handleDelete}
      />
    );
  });
  return (
    <div className="todo-container">
      <InputField
        handleInput={props.handleInput}
        handleSubmit={props.handleSubmit}
      />
      <ul className="todo-list">{displayItems}</ul>
      <ClearButton handleClearAll={props.handleClearAll} />
    </div>
  );
}

export default ToDoListUI;
