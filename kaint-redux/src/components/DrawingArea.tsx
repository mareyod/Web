import React from "react";
import "../styles/DrawingArea.css";
import Canvas from "./Canvas.tsx";
import Palette from "./Palette.tsx";

const DrawingArea = () => {

  return (
    <div className="DrawingArea">
      <Canvas/>
      <Palette/>
    </div>
  );
}

export default DrawingArea;
