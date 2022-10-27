import React, { useState } from "react";
import "../styles/Palette.css";
import Canvas__pixel from "./Canvas__pixel";
import Palette__pixel from "./Palette__pixel";

const Palette= (props) => {
    const [PixelColors, setPixelColors] = useState([
        {id: 1, color: '#FF3F3F'}, {id: 2, color: '#FE5454'}, {id: 3, color: '#E27878'},
        {id: 4, color: '#FF9B94'}, {id: 5, color: '#FD7B69'}, {id: 6, color: '#F65742'},
        {id: 7, color: '#FF842B'}, {id: 8, color: '#FE6636'}, {id: 9, color: '#EE8A52'},
        {id: 10, color: '#FF9F45'}, {id: 11, color: '#FFC450'}, {id: 12, color: '#FFB55F'},
        {id: 13, color: '#FDB322'}, {id: 14, color: '#FFDF37'}, {id: 15, color: '#DBC609'},
        {id: 16, color: '#ADE11A'}, {id: 17, color: ' #7EB900'}, {id: 18, color: '#948E00'},
        {id: 19, color: '#009A06'}, {id: 20, color: '#94C15B'}, {id: 21, color: '#13A467'},
        {id: 22, color: '#4AB9AC'}, {id: 23, color: '#8FC8D0'}, {id: 24, color: '#5197BE'},
        {id: 25, color: '#3F78E7'}, {id: 26, color: '#5065AF'}, {id: 27, color: '#6684A0'},
        {id: 28, color: '#9699E2'}, {id: 29, color: '#6657A4'}, {id: 30, color: '#8128A0'},
    ])
  
    let rows = 5;
    let columns = 6;
    let table = [];
    let row = [];
    
   
    const PalettePixels = PixelColors.map(PixelColor =>
      <Palette__pixel onClick = {(event) => {props.onClick(event.target.style.backgroundColor)}} PixelColor = {PixelColor.color} key = {PixelColor.id}/>
    );

    for(let i = 0; i < rows; i++)
    {
          for(let j = 0; j < columns; j++)
          {
            row.push(<td>{PalettePixels[i*(columns-1)+j]}</td>);
          }
        table.push(<tr>{row}</tr>);
        row = [];
    }
  return (
    <div className="Palette">
        {table}
    </div>
  );
}

export default Palette;
