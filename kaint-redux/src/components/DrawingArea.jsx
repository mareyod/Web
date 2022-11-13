import React from "react";
import "../styles/DrawingArea.css";
import Canvas from "./Canvas";
import Palette from "./Palette";

const DrawingArea = () => {
  console.log("DrawingArea render");

  return (
    <div className="DrawingArea">
      <Canvas/>
      <Palette/>
    </div>
  );
}

export default DrawingArea;
