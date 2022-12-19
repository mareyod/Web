import React, {FC} from "react";
import { useSelector } from "react-redux";
import "../styles/Canvas.css";
import CanvasRow from "./CanvasRow";
import { useAppSelector } from "../hooks/Selector";
import { RootState } from "../store";

const Canvas: FC = () => {

 //const canvasSize = useAppSelector(state => state.sizeReducer.size);
  const canvasSize = useAppSelector((state: RootState) => state.sizeReducer.size);/////////////////////////////

  let table: CanvasRow[] = [];
  for (let i = 0; i < canvasSize; i++) {
    table.push( 
    <CanvasRow key={i} />  
    );
  }


  return (
    <div className="Canvas">
      {table}
    </div>
  );
}

export default Canvas;