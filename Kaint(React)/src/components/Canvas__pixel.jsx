import React, { useRef, useState } from "react";
import "../styles/Canvas__pixel.css";

const Canvas__pixel = ({ color, draw, clearCount }) => {

  
  const ChangeColorEnter = (event) => {
    console.log(event.type);
    console.log(draw.current);
    if (draw.current) {
      event.target.style.backgroundColor = color;
    }


  }

  const ChangeColorDown = (event) => {
    console.log(event.type);
    console.log(draw);
    event.target.style.backgroundColor = color;

  }
  
//   const container = {
//     backgroundColor: "white",
// }

console.log("canvasPixel rendered");
console.log("clearCount:");
console.log(clearCount);

return (
  <div>
    <div
      className="Canvas__pixel"
      onMouseEnter={ChangeColorEnter}
      onMouseDown={ChangeColorDown}
      //style={container}

    >

    </div>
  </div>
);
}

export default Canvas__pixel;
