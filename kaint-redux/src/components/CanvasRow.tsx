import {FC} from "react";
import "../styles/Row.css";
import CanvasPixel from "./CanvasPixel";
import { useAppSelector } from "../hooks/Selector";

const CanvasRow: FC = () => {

    const canvasSize = useAppSelector(state => state.sizeReducer.size);
    
    let row: JSX.Element[] = [];
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