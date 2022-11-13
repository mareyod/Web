import React, { useRef } from "react";
import "../styles/Navigation.css";
import "../styles/MyInput.css";
import "../styles/Button.css";
import { useDispatch } from "react-redux";
import { clearCanvasAction} from "../store/clearCountReducer";
import { changeSizeAction } from "../store/sizeReducer";
const Navigation = () => {

    const dispatch = useDispatch();

    const inputValue = useRef(0);
    const getInputValue = (event) => {
        inputValue.current = event.target.value;
    }

    const changeSize = () => {
        dispatch(changeSizeAction(inputValue.current))
    }

    const clearCanvas = () => {
        dispatch(clearCanvasAction())
    }

    return (
        <div className="Navigation">

            <input
                className="SizeInput"
                type="number"
                id="size"
                max="14"
                placeholder="Размер (<15)"
                onChange={getInputValue}
            />

            <input
                className="Button"
                type="button"
                onClick={changeSize}
                value="Нарисовать"
            />

            <input
                className="Button"
                type="button"
                onMouseDown={clearCanvas}
                value="Очистить"
            />

        </div>
    );
}

export default Navigation;
