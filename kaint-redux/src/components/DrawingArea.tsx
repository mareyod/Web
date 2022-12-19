import "../styles/DrawingArea.css";
import Canvas from "./Canvas";
import Palette from "./Palette";

const DrawingArea = () => {

  return (
    <div className="DrawingArea">
      <Canvas/>
      <Palette/>
    </div>
  );
}

export default DrawingArea;
