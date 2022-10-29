import React, { useEffect, useRef, useState } from "react";
import "../styles/CanvasPixel.css";

const CanvasPixel = ({ pixelColor, drawPermission, clearCount, canvasSize }) => {

  const ref = useRef(null);

  useEffect(() => {
    ref.current.style.backgroundColor = "white";
  },[canvasSize, clearCount]);
  
  const changeColorEnter = (event) => {
    if (drawPermission.current) {
      event.target.style.backgroundColor = pixelColor;
    }
  }

  const changeColorDown = (event) => {
    event.target.style.backgroundColor = pixelColor;
  }

return (
  <div>
    <div
      ref = {ref}
      className="CanvasPixel"
      onMouseEnter={changeColorEnter}
      onMouseDown={changeColorDown}
      style={{backgroundColor: "white"}}
    />
  </div>
);
}

export default CanvasPixel;