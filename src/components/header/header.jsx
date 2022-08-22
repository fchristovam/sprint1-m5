import React from "react";
import "./header.css";
import Texto from "../texto/texto";
import Botao from "../botao/botao";

const Header = () => {
    return(
        <div className="headerContainer">
            <div className="bg-color">
                <div className="bg-cut">         
                </div>
            </div>
            <Texto className="linhaUm" texto="Uma seleção de produtos" />
            <Texto className="linhaDois" texto="Especial para você" />
            <Texto className="linhaTres" texto="Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!" />
        
        <div className="botaoHeader">
            <Botao textoBotao="Conheça a Linx" />
            <Botao textoBotao="Ajude o algoritmo" />
            <Botao textoBotao="Seus produtos" />
            <Botao textoBotao="Compartilhe" />
        </div>

        </div>
    )
}

export default Header;