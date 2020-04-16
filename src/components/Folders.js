import React from "react";
import Notes from "./Notes";
import Image from "./Image";
import Quotes from "../quotesData";
import Quote from "./Quote";

class Folders extends React.Component {
  constructor() {
    super();
    this.state = {
      popupState: false,
      allMemes: [],
      image: "",
      displayImage: false,
      quote: "",
      displayQuote: false,
    };
    this.handlePopup = this.handlePopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.handleNewImg = this.handleNewImg.bind(this);
    this.closeNewImg = this.closeNewImg.bind(this);
    this.handleQuote = this.handleQuote.bind(this);
    this.closeQuote = this.closeQuote.bind(this);
  }

  handlePopup() {
    this.setState({ popupState: true });
  }

  closePopup() {
    this.setState({ popupState: false });
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ allMemes: json.data.memes });
      });
  }

  handleNewImg(event) {
    event.preventDefault();
    const randomNum = Math.floor(
      Math.random() * Math.floor(this.state.allMemes.length)
    );
    const randomMeme = this.state.allMemes[randomNum];
    this.setState({ image: randomMeme.url, displayImage: true });
  }

  closeNewImg() {
    this.setState({ displayImage: false });
  }

  handleQuote() {
    const randomNum = Math.floor(Math.random() * Math.floor(Quotes.length));
    this.setState({ quote: Quotes[randomNum], displayQuote: true });
  }

  closeQuote() {
    this.setState({ displayQuote: false });
  }

  render() {
    return (
      <div className="bottomWrapper">
        <div className="icon-container">
          <div className="folder-icon-panel" onClick={this.handleNewImg}>
            <img
              className="folderClosed"
              src={require("../assets/img/folder_closed.png")}
              alt="problem?"
            />
            <img
              className="folderOpen"
              src={require("../assets/img/folder_open.png")}
              alt="problem?"
            />
            <h2>image</h2>
          </div>

          <div className="folder-icon-panel" onClick={this.handleQuote}>
            <img
              className="folderClosed"
              src={require("../assets/img/folder_closed.png")}
              alt="problem?"
            />
            <img
              className="folderOpen"
              src={require("../assets/img/folder_open.png")}
              alt="problem?"
            />
            <h2>quote</h2>
          </div>

          <div className="note-icon-panel" onClick={this.handlePopup}>
            <img src={require("../assets/img/note.png")} alt="problem?" />
            <h2>+</h2>
          </div>
        </div>
        <Notes
          popupState={this.state.popupState}
          closePopup={this.closePopup}
        />
        <Image
          image={this.state.image}
          closeNewImg={this.closeNewImg}
          displayImage={this.state.displayImage}
        />
        <Quote
          quote={this.state.quote}
          closeQuote={this.closeQuote}
          displayQuote={this.state.displayQuote}
        />
      </div>
    );
  }
}

export default Folders;
