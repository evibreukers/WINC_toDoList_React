import React from "react";
import PopUp from "./PopUp";
import randomColor from "randomcolor";

class Notes extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [
        { id: 1, text: "I am a note", color: "salmon" },
        { id: 2, text: "Blablablablablablablablabla", color: "salmon" },
      ],
      noteText: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit() {
    if (!document.querySelector(".noteText").value) {
      return;
    }
    const updateNotes = this.state.notes;
    const currentId = this.state.notes.map((item) => item.id);
    let newId;
    if (this.state.notes.length !== 0) {
      newId = Math.max(...currentId) + 1;
    } else {
      newId = 1;
    }
    const newNote = {
      id: newId,
      text: this.state.noteText,
      color: randomColor(),
    };
    updateNotes.push(newNote);
    this.setState({ notes: updateNotes });

    // clear input field
    document.querySelector(".noteText").value = "";

    // clear input state
    this.setState({ noteText: "" });
  }

  handleDelete(event) {
    const updateNotes = this.state.notes.filter((item) => {
      return item.id !== parseInt(event.target.parentElement.parentElement.id);
    });
    this.setState({ notes: updateNotes });
  }

  handleEdit(event) {
    const updateNotes = this.state.notes.filter((item) => {
      if (item.id === parseInt(event.target.parentElement.id)) {
        item.text = event.target.value;
      }
      return item;
    });
    this.setState({ notes: updateNotes });
  }

  handleColorChange(event) {
    const updateNotes = this.state.notes.filter((note) => {
      if (note.id === parseInt(event.target.parentElement.parentElement.id)) {
        note.color = randomColor();
      }
      return note;
    });
    this.setState({ notes: updateNotes });
  }
  render() {
    const displayNotes = this.state.notes.map((note) => {
      return (
        <div
          className="sticky-note"
          key={note.id}
          id={note.id}
          style={{ backgroundColor: note.color }}
        >
          <div className="topNote">
            <p className="changeColor" onClick={this.handleColorChange}>
              new color
            </p>
            <p className="deleteNoteButton" onClick={this.handleDelete}>
              X
            </p>
          </div>
          <textarea onClick={this.handleEdit}>{note.text}</textarea>
        </div>
      );
    });
    return (
      <div className="note-container">
        {displayNotes}
        <PopUp
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          popupState={this.props.popupState}
          closePopup={this.props.closePopup}
        />
      </div>
    );
  }
}

export default Notes;
