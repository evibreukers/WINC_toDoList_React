import React from "react";
import InputField from "./InputField";
import ClearButton from "./ClearButton";
import ToDoItem from "./ToDoItem";

class ToDoList extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoItems: [
        { id: 1, title: "pizza eten", date: "02/05/20", isChecked: true },
        { id: 2, title: "react leren", date: "02/05/20", isChecked: false },
      ],
      inputTask: "",
      inputDate: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClearAll = this.handleClearAll.bind(this);
  }

  handleInput(event) {
    if (event.target.type === "checkbox") {
      console.log("haha");
      const updateItems = this.state.toDoItems.map((item) => {
        if (item.id === parseInt(event.target.parentElement.parentElement.id)) {
          item.isChecked = !item.isChecked;
        }
        return item;
      });
      console.log(updateItems);
      this.setState({ toDoItems: updateItems });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  }

  handleSubmit() {
    if (!document.querySelector(".inputTask").value) {
      return;
    }
    const updateItems = this.state.toDoItems;
    const currentId = this.state.toDoItems.map((item) => item.id);
    let newId;
    if (this.state.toDoItems.length !== 0) {
      newId = Math.max(...currentId) + 1;
    } else {
      newId = 1;
    }
    const newItem = {
      id: newId,
      title: this.state.inputTask,
      date: this.state.inputDate,
      isChecked: false,
    };
    updateItems.push(newItem);
    this.setState({ toDoItems: updateItems });

    // clear input field
    document.querySelector(".inputTask").value = "";
    document.querySelector(".inputDate").value = "";

    // clear input state
    this.setState({ inputTask: "", inputDate: "" });
  }

  handleDelete(event) {
    const updateItems = this.state.toDoItems.filter((item) => {
      return item.id !== parseInt(event.target.parentElement.parentElement.id);
    });
    this.setState({ toDoItems: updateItems });
  }

  handleClearAll() {
    this.setState({ toDoItems: [] });
  }

  render() {
    const displayItems = this.state.toDoItems.map((task) => {
      return (
        <ToDoItem
          key={task.id}
          id={task.id}
          title={task.title}
          date={task.date}
          isChecked={task.isChecked}
          handleInput={this.handleInput}
          handleDelete={this.handleDelete}
        />
      );
    });
    return (
      <div className="todo-container">
        <InputField
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
        <ul className="todo-list">{displayItems}</ul>
        <ClearButton handleClearAll={this.handleClearAll} />
      </div>
    );
  }
}

export default ToDoList;
