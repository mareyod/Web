import {FC} from "react";
import "../styles/App.css";
import "../styles/Text.css";
import DrawingArea from "./DrawingArea";
import Navigation from "./Navigation";

const App: FC = () => {

  return (
    <div className="App">

      <h1> Kaint </h1>

      <DrawingArea/>

      <Navigation/>

    </div>
  );
}

export default App;
