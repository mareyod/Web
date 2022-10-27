import React from "react";
import "../styles/Button.css";

const Button = (props) => {

    return(
        <input type="button" {...props}></input>
    );
}
// value = {props.text}
export default Button;
  
