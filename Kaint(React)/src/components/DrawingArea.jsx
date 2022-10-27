import React, {useState} from "react";
import "../styles/DrawingArea.css";
import Canvas from "./Canvas";
import Palette from "./Palette";

const DrawingArea = (props) => {
  const [color, setColor] = useState();
  const getColor = (color) =>{
      setColor(color);
  }
  return (
    <div className="DrawingArea"> 
      <Canvas size = {props.CanvasSize} PixelColor = {color}/>
      <Palette onClick = {getColor}/>
    </div>
  );
}

export default DrawingArea;
