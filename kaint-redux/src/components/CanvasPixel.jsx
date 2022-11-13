import React from "react";
import "../styles/CanvasPixel.css";
import { useSelector, useDispatch } from "react-redux";
import { changeDrawPermissionAction } from "../store/drawPermissionReducer";

const CanvasPixel = () => {

  const canvasSize = useSelector(state => state.sizeReducer.size);
  const clearCount = useSelector(state => state.clearCountReducer.clearCount);
  const drawPermission = useSelector(state => state.drawPermissionReducer.drawPermission);
  const pixelColor = useSelector(state => state.backgroundColorReducer.backgroundColor);
  const dispatch = useDispatch();
  

  const changeColorEnter = (event) => {
    if (drawPermission) {
      event.target.style.backgroundColor = pixelColor;
    }
  }

  const handleMouseDown = (event) => {
    permitDraw();
    changeColorDown(event);
  }
  
  const permitDraw = () => {
    dispatch(changeDrawPermissionAction(1))
  }
  const changeColorDown = (event) => {
    event.target.style.backgroundColor = pixelColor;
  }

  const cancelDraw = () => {
    dispatch(changeDrawPermissionAction(0))
  }

  

  return (
    <div>
      <div
        className="CanvasPixel"
        key={[clearCount, canvasSize]}
        onMouseEnter={changeColorEnter}
        onMouseDown={handleMouseDown}
        onMouseUp={cancelDraw}
      />
    </div>
  );
}

export default CanvasPixel;