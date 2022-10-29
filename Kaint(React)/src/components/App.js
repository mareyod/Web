import "../styles/App.css";
import React, { useState } from "react";
import Text from "./Text.jsx";
import DrawingArea from "./DrawingArea.jsx";
import Navigation from "./Navigation.jsx";

function App() {


  const [canvasSize, setCanvasSize] = useState();
  const getCanvasSize = (canvasSize) => {
    if (canvasSize < 15 && canvasSize >= 0) {
      setCanvasSize(canvasSize);
    }
  }
  
  const [clearCount, setClearCount] = useState();
  const getClearCount = (clearCount) => {
    setClearCount(clearCount);
  }


  return (
    <div className="App">

      <Text />

      <DrawingArea
        canvasSize={canvasSize}
        clearCount={clearCount}
      />

      <Navigation
        canvasSize={getCanvasSize}
        clearCount={getClearCount}

      />

    </div>
  );
}

export default App;
