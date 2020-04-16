import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Folders from "./components/Folders";
import "../src/assets/style.css";

function App() {
  return (
    <div className="background">
      <Header />
      <Main />
      <Footer />
      <Folders />
    </div>
  );
}

export default App;
