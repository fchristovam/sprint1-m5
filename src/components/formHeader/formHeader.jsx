import React from "react";
import "./formHeader.css";
import InputTexto from "../input/inputTexto";
import InputRadio from "../input/inputRadio";
import Botao from "../botao/botao";


const FormHeader = () => {
    return(
        <form className="form">
            <InputTexto className="input" labelTxt="Seu nome:" labelFor="nome" inputType="text" />
            <InputTexto className="input" labelTxt="E-mail:" labelFor="email" inputType="text" />
            <InputTexto className="input" labelTxt="CPF:" labelFor="cpf" inputType="text" />
            <div>
            <InputRadio className="input" labelTxt="Masculino" labelFor="masculino" inputType="radio"  />
            <InputRadio className="input" labelTxt="Feminino" labelFor="feminino" inputType="radio"  />
            </div>
            <Botao className="botao-header" textoBotao="Enviar" />
        </form>
    )
}

export default FormHeader;