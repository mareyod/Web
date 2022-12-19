import React from "react";
import "../styles/Row.css";
import { useSelector } from "react-redux";
import CanvasPixel from "./CanvasPixel";
import { useAppSelector } from "../hooks/Selector";

const CanvasRow = () => {

    const canvasSize = useAppSelector(state => state.sizeReducer.size);///////////////////
    
    let row: CanvasPixel[]= [];
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