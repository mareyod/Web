import React, {useState, useRef} from "react";
import "../styles/Canvas.css";
import Canvas__pixel from "./Canvas__pixel";

const Canvas = ({size, PixelColor }) => {
  let table = [];
  let row = [];
  console.log("Начало рендера Canvas");
  const draw = useRef(0);

  const CancelDraw = (event) =>
  {
    console.log(draw.current);
    console.log(event.type);
    draw.current = 0;
    console.log(draw.current);
  }
  const PermitDraw = (event) => {
    console.log(draw.current); 
    draw.current = 1;
    console.log(event.type);
    console.log(draw.current);  
  }

  const [clear, setClear] = useState();
  const[clearCount, setClearCount] = useState(0);

  if (size < 15) {
    table = [];
    row = [];
    console.log('Перед for');
    console.log(table);
    for (let i = 0; i < size; i++) {
      row.push(<td><Canvas__pixel clearCount = {clearCount} draw = {draw} color={PixelColor} /></td>);
    }
    console.log('В for');
    for (let i = 0; i < size; i++) {
      table.push(<tr>{row}</tr>);
      console.log(table);
    }
  }
  const clearCanvas = () =>{
    table = [];
    setClear(1);
    setClearCount(clearCount+1);
    console.log("clearCount");
    console.log(clearCount);
    console.log("Deleted");
    console.log(table);
  }

  
  
  return (
    <div className="Canvas" onMouseDown={PermitDraw} onMouseUp = {CancelDraw}>
      {table}
      <input type = "button" value = "clear" onClick = {clearCanvas}/>
    </div>
  );
}

export default Canvas;
