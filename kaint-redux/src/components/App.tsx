import React from "react";
import "../styles/App.css";
import "../styles/Text.css";
import DrawingArea from "./DrawingArea";
import Navigation from "./Navigation";

function App() {

  return (
    <div className="App">

      <h1> Kaint </h1>

      <DrawingArea/>

      <Navigation/>

    </div>
  );
}

export default App;
