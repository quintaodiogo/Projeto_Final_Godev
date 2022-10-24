import React from "react";
import "./Footer.css";
import Atendimento from "./Atendimento";
import Pagamento from "./Pagamento";
import Redes from "./Redes";
import Sobre from "./Sobre";
import Credit from "./Credit";

const Footer = () => {
  return (
    <>
      <footer>
        <div style={{ fontSize: "20px" }} className="containerBodyFooter">
          <Atendimento />
          <Sobre />
          <Pagamento />
          <Redes />
        </div>
        <Credit />
      </footer>
    </>
  );
};

export default Footer;
