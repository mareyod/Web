import React, { useState, useRef } from "react";
import "../styles/Canvas.css";
import CanvasRow from "./CanvasRow";

const Canvas = ({ pixelColor, clearCount, canvasSize }) => {
  let table = [];

  const drawPermission = useRef(0);

  const cancelDraw = (event) => {
    drawPermission.current = 0;
  }
  const permitDraw = (event) => {
    drawPermission.current = 1;
  }

  for (let i = 0; i < canvasSize; i++) {
    table.push(
      <CanvasRow
        canvasSize={canvasSize}
        clearCount={clearCount}
        drawPermission={drawPermission}
        pixelColor={pixelColor}
      />
    );
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