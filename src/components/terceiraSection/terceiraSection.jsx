import React from 'react';
import './terceiraSection.css';

import Botao from '../botao/botao';
import Divisor from '../divisor/divisor';
import InputTexto from '../input/inputTexto';
import Texto from '../texto/texto';

const TerceiraSection = () => {
    return ( 
    <div className='section-tres'>
        <Divisor texto='Compartilhe a novidade' width="30%"/>
        <Texto classe='texto-section-tres' texto='Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!'/>
        <div className='inputs-section-tres'>
        <InputTexto labelFor='nome-do-amigo' labelTxt='Nome do seu amigo:' inputType="text"/>
        <InputTexto labelFor='email-do-amigo' labelTxt='E-mail:' inputType="text"/>
        </div>
        <div className='botao-section-tres'>
        <Botao textoBotao="Enviar agora" />
        </div>
    </div>
    );
}

export default TerceiraSection;
