import { useRef, FC, MouseEvent, ChangeEvent } from "react";
import "../styles/Navigation.css";
import "../styles/MyInput.css";
import "../styles/Button.css";
import { clearCanvasAction} from "../store/clearCountReducer";
import { changeSizeAction } from "../store/sizeReducer";
import { useAppDispatch } from "../hooks/Dispatch";
const Navigation: FC = () => {

    const dispatch = useAppDispatch();

    const inputValue = useRef<string>();
    const getInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        inputValue.current = event.target.value;
    }

    const changeSize = (event: MouseEvent<HTMLDivElement>) => {
        dispatch(changeSizeAction(Number(inputValue.current)))
    }

    const clearCanvas = (event: MouseEvent<HTMLDivElement>) => {
        dispatch(clearCanvasAction())
    }

    return (
        <div className="Navigation">

            <input
                className="SizeInput"
                type="number"
                id="size"
                max="14"
                min="0"
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
