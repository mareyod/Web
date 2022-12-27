import {FC, MouseEvent} from "react";
import "../styles/CanvasPixel.css";
import { changeDrawPermissionAction } from "../store/drawPermissionReducer";
import { useAppSelector } from "../hooks/Selector";
import { useAppDispatch } from "../hooks/Dispatch";

const CanvasPixel: FC = () => {


  const canvasSize = useAppSelector(state => state.sizeReducer.size);
  const clearCount= useAppSelector(state => state.clearCountReducer.clearCount);
  const drawPermission = useAppSelector(state => state.drawPermissionReducer.drawPermission);
  const pixelColor = useAppSelector(state => state.backgroundColorReducer.backgroundColor);
  const dispatch = useAppDispatch();
  

  const changeColorEnter = (event: MouseEvent<HTMLDivElement>) => {
    if (drawPermission) {
      (event.target as HTMLDivElement).style.backgroundColor = pixelColor;
    }
  }

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    permitDraw();
    changeColorDown(event);
  }

  const permitDraw = () => {
    dispatch(changeDrawPermissionAction(true))
  }
  const changeColorDown = (event: MouseEvent<HTMLDivElement>) => {
    (event.target as HTMLDivElement).style.backgroundColor = pixelColor;
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