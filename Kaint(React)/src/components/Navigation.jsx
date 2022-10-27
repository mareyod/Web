import React, {useState} from "react";
import "../styles/Navigation.css";
import Button from "./Button";
import MyInput from "./MyInput";

const Navigation = (props) => {

 

    const [inputValue, setInputValue] = useState(0);
    const getInputValue = (event) => {
        
        setInputValue(event.target.value);  
    }

    return (
        <div>
            <MyInput type="number" id="size" max="14" placeholder="Размер (<15)" onChange={getInputValue} />
            <Button onClick = {() => props.DrawCanvas(inputValue)} value="Нарисовать" />
            <Button value="Очистить" />
            
        </div>
    );
}

export default Navigation;
