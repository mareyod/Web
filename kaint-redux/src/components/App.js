import "../styles/App.css";
import "../styles/Text.css";
import DrawingArea from "./DrawingArea.jsx";
import Navigation from "./Navigation.jsx";

function App() {
  console.log("App render");

  return (
    <div className="App">

      <h1> Kaint </h1>

      <DrawingArea/>

      <Navigation/>

    </div>
  );
}

export default App;
