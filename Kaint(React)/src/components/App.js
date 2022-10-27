// import logo from './logo.svg';
import '../styles/App.css';
import React , {useState} from "react";
import Text from "./Text.jsx";
import DrawingArea from "./DrawingArea.jsx";
import Navigation from "./Navigation.jsx";

function App() {

  // const [size, setSize] = useState();
  // const getSize = (size) =>{
  //     setSize(size);
  // }

  // const[permission, setPermission] = useState();
  // const getPermission = (permission) =>{
  //   setPermission(permission)
  // }

  const [size, setSize] = useState();
    const getSize = (size) => {
      if(size < 15)
      {
        setSize(size);
      }
    }

  return (
    <div className="App">
    <Text />
    <DrawingArea CanvasSize = {size}/>
    <Navigation  DrawCanvas = {getSize}/>
    
    </div>
  );
}

export default App;
