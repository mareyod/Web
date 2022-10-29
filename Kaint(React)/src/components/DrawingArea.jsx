import React, { useState, useRef } from "react";
import "../styles/DrawingArea.css";
import Canvas from "./Canvas";
import Palette from "./Palette";

const DrawingArea = ({ clearCount, canvasSize }) => {
  const [color, setColor] = useState();
  const getColor = (color) => {
    setColor(color);
  }

  return (
    <div className="DrawingArea">
      <Canvas
        clearCount={clearCount}
        canvasSize={canvasSize}
        pixelColor={color}
      />
      <Palette onClick={getColor} />
    </div>
  );
}

export default DrawingArea;
