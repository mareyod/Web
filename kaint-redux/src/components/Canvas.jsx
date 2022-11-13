import React from "react";
import { useSelector } from "react-redux";
import "../styles/Canvas.css";
import CanvasRow from "./CanvasRow";

const Canvas = () => {
  console.log("Canvas render");
  let table = [];
  const canvasSize = useSelector(state =>state.size);
  for (let i = 0; i < canvasSize; i++) {
    table.push( 
    <CanvasRow key={i} />  
    );
  }


  return (
    <div className="Canvas">
      {table}
    </div>
  );
}

export default Canvas;