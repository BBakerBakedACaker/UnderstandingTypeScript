import React from "react";
import "./styles.css";

// Defining the input field component on the main App
const InputFeild = () => {
    return <form className="input">
        <input type="input" placeholder="Enter a Task" className="input__box"></input>
        <button className="input_submit" type="submit">Add</button>
    </form>
}

export default InputFeild;