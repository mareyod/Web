import React, { useState, useRef } from "react";
import "../styles/Canvas.css";
import CanvasPixel from "./CanvasPixel";

const Canvas = ({ pixelColor, clearCount, canvasSize }) => {
  let table = [];
  let row = [];
  console.log("Начало рендера Canvas");
  const drawPermission = useRef(0);

  const cancelDraw = (event) => {
    drawPermission.current = 0;
  }
  const permitDraw = (event) => {
    drawPermission.current = 1;
  }

  console.log("Перед for");
  console.log(table);
  
  
  for (let i = 0; i < canvasSize; i++) {
    row.push(<td>
      <CanvasPixel
        canvasSize={canvasSize}
        clearCount={clearCount}
        drawPermission={drawPermission}
        pixelColor={pixelColor}
      />
    </td>);
  }
  console.log("В for");
  for (let i = 0; i < canvasSize; i++) {
    table.push(<tr>{row}</tr>);
    console.log(table);
  }



  return (
    <div
      className="Canvas"
      onMouseDown={permitDraw}
      onMouseUp={cancelDraw}>
      {table}
    </div>
  );
}

export default Canvas;