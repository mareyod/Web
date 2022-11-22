import React from "react";
import "../styles/Row.css";
import { useSelector } from "react-redux";
import CanvasPixel from "./CanvasPixel";

const CanvasRow = () => {

    const canvasSize = useSelector(state => state.sizeReducer.size);
    
    let row = [];
    for (let i = 0; i < canvasSize; i++) {
        row.push( <CanvasPixel key = {i}/> ) 
    }

    return (
        <div className="Row" >
            {row}
        </div>
    );
}

export default CanvasRow;