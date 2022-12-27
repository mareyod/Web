import {FC} from "react";
import "../styles/DrawingArea.css";
import Canvas from "./Canvas";
import Palette from "./Palette";

const DrawingArea: FC = () => {

  return (
    <div className="DrawingArea">
      <Canvas/>
      <Palette/>
    </div>
  );
}

export default DrawingArea;
