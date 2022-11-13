import React from "react";
import "../styles/MyInput.css";

const MyInput = (props) => {
    console.log("MyInput render");
    return(
        <input className="MyInput" {...props}/>
    );
}
  
export default MyInput;
  