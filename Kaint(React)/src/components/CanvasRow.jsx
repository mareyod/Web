import React, { useState, useRef } from "react";
import "../styles/Row.css";
import CanvasPixel from "./CanvasPixel";

const CanvasRow = ({ pixelColor, clearCount, canvasSize, drawPermission }) => {

    let row = [];

    for (let i = 0; i < canvasSize; i++) {
        row.push(
            <CanvasPixel
                canvasSize={canvasSize}
                clearCount={clearCount}
                drawPermission={drawPermission}
                pixelColor={pixelColor}
            />
        );
    }
    return (
        <div className="Row">
            {row}
        </div>
    );
}

export default CanvasRow;