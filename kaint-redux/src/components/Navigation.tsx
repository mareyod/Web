import React, { useRef } from "react";
import "../styles/Navigation.css";
import "../styles/MyInput.css";
import "../styles/Button.css";
import { useDispatch } from "react-redux";
import { clearCanvasAction} from "../store/clearCountReducer.tsx";
import { changeSizeAction } from "../store/sizeReducer.tsx";
import { useAppDispatch } from "../hooks/Dispatch.tsx";
const Navigation = () => {

    const dispatch = useAppDispatch();

    const inputValue = useRef<string>();///////////
    const getInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        inputValue.current = event.target.value;
    }

    const changeSize = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        dispatch(changeSizeAction(inputValue.current))
    }

    const clearCanvas = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
