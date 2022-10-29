import React, { useState } from "react";
import "../styles/Navigation.css";
import Button from "./Button";
import MyInput from "./MyInput";

const Navigation = (props) => {


    const [inputValue, setInputValue] = useState(0);
    const getInputValue = (event) => {

        setInputValue(event.target.value);
    }

    const getCanvasSize = () => {
        props.canvasSize(inputValue);
    }

    const [clearCount, setclearCount] = useState(0);
    const clearCounter = () => {
        setclearCount(!clearCount);
        props.clearCount(clearCount);
    }
    return (
        <div className="Navigation">
            <MyInput
                type="number"
                id="size"
                max="14"
                placeholder="Размер (<15)"
                onChange={getInputValue}
            />
            <Button
                onClick={getCanvasSize}
                value="Нарисовать"
            />
            <Button
                onClick={clearCounter}
                value="Очистить"
            />

        </div>
    );
}

export default Navigation;
