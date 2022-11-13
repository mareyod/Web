import React from "react";
import { useSelector } from "react-redux";
import "../styles/Canvas.css";
import CanvasRow from "./CanvasRow";

const Canvas = () => {

  const canvasSize = useSelector(state => state.sizeReducer.size);
  
  let table = [];
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