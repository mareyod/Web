import React from "react";
import "../styles/CanvasPixel.css";
import { useSelector, useDispatch } from "react-redux";
import { changeDrawPermissionAction } from "../store/drawPermissionReducer";
import { useAppSelector } from "../hooks/Selector";
import { useAppDispatch } from "../hooks/Dispatch";

const CanvasPixel = () => {


  const canvasSize = useAppSelector(state => state.sizeReducer.size);//////////
  const clearCount= useAppSelector(state => state.clearCountReducer.clearCount);////////
  const drawPermission = useAppSelector(state => state.drawPermissionReducer.drawPermission);//////
  const pixelColor = useAppSelector(state => state.backgroundColorReducer.backgroundColor);/////
  const dispatch = useAppDispatch();
  

  const changeColorEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (drawPermission) {
      //event.target.style.backgroundColor = pixelColor;
      (event.target as HTMLDivElement).style.backgroundColor = pixelColor;/////////
    }
  }

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    permitDraw();
    changeColorDown(event);
  }
  
  const permitDraw = () => {
    dispatch(changeDrawPermissionAction(true))
  }
  const changeColorDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    (event.target as HTMLDivElement).style.backgroundColor = pixelColor;///////////////////////
  }

  const cancelDraw = () => {
    dispatch(changeDrawPermissionAction(false))
  }

  

  return (
    <div>
      <div
        className="CanvasPixel"
        key ={`${clearCount}_${canvasSize}`}
        onMouseEnter={changeColorEnter}
        onMouseDown={handleMouseDown}
        onMouseUp={cancelDraw}
      />
    </div>
  );
}

export default CanvasPixel;