import React from "react";
import "../styles/PalettePixel.css";


const PalettePixel = ({ pixelColor, onClick }) => {
  return (
    <div
      className="PalettePixel"
      onClick={onClick}
      tabIndex={1}
      style={{ backgroundColor: pixelColor }}
    />
  );
}

export default PalettePixel;