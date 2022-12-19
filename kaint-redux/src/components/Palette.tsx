import React from "react";
import "../styles/Palette.css";
import "../styles/PalettePixel.css";
import { changeColorAction } from "../store/backgroundColorReducer";
import { useAppDispatch } from "../hooks/Dispatch";

const PixelColors = [
  { id: 1, color: "#FF3F3F" }, { id: 2, color: "#FE5454" }, { id: 3, color: "#E27878" },
    { id: 4, color: "#FF9B94" }, { id: 5, color: "#FD7B69" }, { id: 6, color: "#F65742" },
    { id: 7, color: "#FF842B" }, { id: 8, color: "#FE6636" }, { id: 9, color: "#EE8A52" },
    { id: 10, color: "#FF9F45" }, { id: 11, color: "#FFC450" }, { id: 12, color: "#FFB55F" },
    { id: 13, color: "#FDB322" }, { id: 14, color: "#FFDF37" }, { id: 15, color: "#DBC609" },
    { id: 16, color: "#ADE11A" }, { id: 17, color: " #7EB900" }, { id: 18, color: "#948E00" },
    { id: 19, color: "#009A06" }, { id: 20, color: "#94C15B" }, { id: 21, color: "#13A467" },
    { id: 22, color: "#4AB9AC" }, { id: 23, color: "#8FC8D0" }, { id: 24, color: "#5197BE" },
    { id: 25, color: "#3F78E7" }, { id: 26, color: "#5065AF" }, { id: 27, color: "#6684A0" },
    { id: 28, color: "#9699E2" }, { id: 29, color: "#6657A4" }, { id: 30, color: "#8128A0" }
]

const Palette = () => {


  const dispatch = useAppDispatch();

  const getBackgroundColor = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    dispatch(changeColorAction((event.target as HTMLDivElement).style.backgroundColor))
  }

  const PalettePixels = PixelColors.map(PixelColor =>
    <div
      className="PalettePixel"
      key = {PixelColor.id}
      onClick = {getBackgroundColor}
      tabIndex={1}
      style={{ backgroundColor: PixelColor.color }}
    />
  );

  return (
    <div className="Palette">
      {PalettePixels}
    </div>
  );
}

export default Palette;