import React from "react";
import "./footer.css";
import Texto from "../texto/texto";

const Footer = () => {
    return(
        <div className="footerContainer">
            <div className="bg-footer-color">
                <div className="bg-footer-cut">         
                </div>
            </div>
            <Texto className="linha-footer" texto="Testando suas habilidades em HTML, CSS e JS" />
            <Texto className="linha-footer" texto="Linx Impulse" />
            <Texto className="linha-footer" texto="2019" />
        </div>
    )
}

export default Footer;