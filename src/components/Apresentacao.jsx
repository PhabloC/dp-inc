import React from "react";
import "../styles/Apresentacao.css";

export default function Apresentacao() {
  return (
    <div className="apresentacao-container">
      <div className="h1-apresentacao">
        <h1>
          PRAZER, SOMOS A <br />
          DP INC.
        </h1>
      </div>
      <div className="apresentacao-text">
        <p>
          São dos grandes encontros que nascem as melhores formas de viver.
          Acreditando no bem, nas pessoas e no trabalho, desenvolvemos imóveis
          de alto padrão com um olhar cuidadoso em cada detalhe e dedicação
          absolutamente artesanal. Trabalhamos unindo luz e design, inovação e
          respeito real à natureza para entregar simplesmente o melhor e criar
          experiências impecáveis de viver. E, ao promover encontros entre as
          pessoas e seus maiores desejos, transformamos vidas.
        </p>
        <button className="btnApresent">
          + ASSISTA AO NOSSO FILME INSTITUCIONAL
        </button>
      </div>
    </div>
  );
}
