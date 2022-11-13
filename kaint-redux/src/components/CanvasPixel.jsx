import React from "react";
import "../styles/CanvasPixel.css";
import { useSelector, useDispatch } from "react-redux";

const CanvasPixel = () => {

  const canvasSize = useSelector(state => state.size);
  const clearCount = useSelector(state => state.clearCount);
  const drawPermission = useSelector(state => state.drawPermission);
  const pixelColor = useSelector(state => state.backgroundColor);


  const dispatch = useDispatch();
  console.log("CanvasPixel render");
  

  const changeColorEnter = (event) => {
    if (drawPermission) {
      event.target.style.backgroundColor = pixelColor;
    }
  }

  const handleMouseDown = (event) => {
    permitDraw();
    changeColorDown(event);
  }
  const changeColorDown = (event) => {
    event.target.style.backgroundColor = pixelColor;
  }

  const cancelDraw = () => {
    dispatch({
      type: "CHANGE_DRAWPERMISSION",
      drawPermission: 0
    })
  }

  const permitDraw = () => {
    dispatch({
      type: "CHANGE_DRAWPERMISSION",
      drawPermission: 1
    })
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