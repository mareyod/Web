import "../styles/Canvas.css";
import CanvasRow from "./CanvasRow";
import { useAppSelector } from "../hooks/Selector";


const Canvas = () => {

 const canvasSize = useAppSelector(state => state.sizeReducer.size);

  let table  = [];
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