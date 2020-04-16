import React from "react";
import ToDoListUI from "./ToDoListUI";

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
    return (
      <ToDoListUI
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
        handleDelete={this.handleDelete}
        handleClearAll={this.handleClearAll}
        // pass down all the properties of this.state
        data={this.state}
      />
    );
  }
}

export default ToDoList;
