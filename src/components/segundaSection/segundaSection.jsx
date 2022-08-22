import React from "react";
import "./segundaSection.css";
import Card from "../card/card";
import Botao from "../botao/botao";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Divisor from "../divisor/divisor";

const SegundaSection = () => {
    const [req, setReq] = useState([])
    const [page, setPage] = useState([])

    useEffect(() => {
        const url = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1`
        axios
        axios.get(url)
        .then((response) => {
            setPage(response.data.nextPage)
            setReq(response.data.products)
        })
        .catch((error) => (error.message))
    }, [])

    function getProducts(url) {
        axios.get(`http://${url}`)
        .then((response) => {
            setPage(response.data.nextPage)
            setReq(
                [...req, ...response.data.products]
                )
        })
        .catch((e) => ('Não encontrado'))
    }

    return (
        <div className='segundaSection'>
            <Divisor texto='Sua seleção especial' width='38%'/>
            <div className="grid-cards">
                { req.map((produto) => {
                    return <Card 
                    src={produto.image} 
                    id={produto.id} 
                    nome={produto.name}
                    descricao={produto.description} 
                    oldPrice={`De R$ ${produto.oldPrice}`} 
                    promo={`Por: R$ ${produto.price}`} 
                    parcelas={`ou ${produto.installments.count}x de ${produto.installments.value}`} 
                />
                })}    
            </div>
            <div className='botao'>
            <Botao onClick= {()=> {
                getProducts(page)
            }} 
                textoBotao='Ainda mais produtos aqui!'/>
        </div>    
        </div>
    )
}

export default SegundaSection;