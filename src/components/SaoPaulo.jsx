import React from "react";
import "../styles/SaoPaulo.css";
import logo from "../assets/SaoPaulo/logo.png";

export default function SaoPaulo() {
  return (
    <div className="container">
      <div className="content">
        <img src={logo} alt="Imagem logo" className="top-image" />
        <p className="textSaoPaulo">
          O Casa São Paulo nasce para criar uma experiência única de viver nos
          bairros mais desejados da maior cidade da América Latina, com toda a
          segurança, exclusividade e acolhimento de uma casa de verdade. A
          arquitetura foi pensada para estar harmoniosamente inserida no
          contexto arborizado dos bairros, privilegiando o uso de materiais,
          ventilação e iluminação naturais para promover o bem-estar de viver em
          contato com a natureza.
        </p>
      </div>
    </div>
  );
}
