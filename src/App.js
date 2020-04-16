import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Folders from "./components/Folders";
import "../src/assets/main.css";
import "../src/assets/todolist.css";
import "../src/assets/folder.css";
import "../src/assets/popup.css";
import "../src/assets/imagequote.css";
import "../src/assets/note.css";
import "../src/assets/mediaquery.css";

function App() {
  return (
    <div className="mainWrapper">
      <Header />
      <Main />
      <Footer />
      <Folders />
    </div>
  );
}

export default App;
