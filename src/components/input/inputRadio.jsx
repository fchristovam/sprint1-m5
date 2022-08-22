import React from "react";
import "./inputRadio.css";

const InputRadio = (props) => {
    return ( 
      <div className='input-radio'>
        <label htmlFor={props.labelFor}>{props.labelTxt}<input type={props.inputType} id={props.labelfor}/></label>
  
      </div>
     );
  }

export default InputRadio;