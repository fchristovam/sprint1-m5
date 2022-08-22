import React from "react";
import "./inputTexto.css";

const InputTexto = (props) => {
    return (
              <div className='input-geral'>
                <label htmlFor={props.labelFor}>{props.labelTxt}</label><br /><br />
                <input className='input' type={props.inputType} id={props.labelfor}/>
              </div>
    );
}

export default InputTexto;