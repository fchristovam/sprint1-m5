import React from "react";
import Texto from "../texto/texto";
import "./primeiraSection.css";
import FormHeader from "../formHeader/formHeader";

const PrimeiraSection = () => {
    return (
        <div className="primeiraSection">
            <div className="texto">
                <Texto className="titulo" texto="Ajude o algorítimo a ser mais certeiro" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Vitae libero consequatur corporis molestias error assumenda repellat aspernatur sint rem fuga!
                    Eius ad rem, minus illum praesentium dolorem architecto quibusdam fugit!
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Debitis, commodi cumque consequuntur velit, rem nisi animi blanditiis numquam similique modi voluptatum assumenda? 
                    Doloribus odio sed expedita impedit ipsam beatae suscipit!
                </p>
            </div>
            <div className="forms">
                <FormHeader />
            </div>
        </div>
    )
}

export default PrimeiraSection;