import React from "react";
import "../styles/Palette__pixel.css";

const Palette__pixel= ({PixelColor, onClick}) => {
  return <div className="Palette__pixel" onClick = {onClick} tabIndex = {1} style = {{backgroundColor: PixelColor}}>
</div>;
}

export default Palette__pixel;
