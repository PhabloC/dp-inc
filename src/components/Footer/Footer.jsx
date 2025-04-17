import React from "react";
import "./Footer.css";
import logoFooter from "../../assets/Footer/logo-footer.png";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>HOME</p>
          <p>INSTITUCIONAL</p>
          <p>CASA SÃO PAULO - ALTO DE PINHEIROS</p>
          <p>CASA SÃO PAULO - JARDINS</p>
          <p>PARTICIPAÇÕES</p>
          <p>CONTATO</p>
        </div>
        <div className="footer-text">
          <p>POLÍTICA DE PRIVACIDADE</p>
          <p>DEFINIÇÕES DE COOKIES</p>
          <p>RELAÇÃO COM INVESTIDORES</p>
        </div>
        <div className="form">
          <p>Receba mais informações</p>
          <form action="" className="form-content">
            <input type="text" placeholder="Insira seu nome" />
            <input type="text" placeholder="Insira seu email" />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-text description">
          <p className="text-direitos">
            DPInc Incorporadora 2025 – Todos os direitos reservados
          </p>
          <p className="text-licenca">
            Elique quiani dustio eum et, occae et audantis quos dollitate
            ipsandem doluptamusam et, odipsam, est antorundipsa cone nessinv
            enditis ventio maximus, quam facea que am core porem. Nem
            doloremporio coresequam, te omnimus, officiur sum atquoditatia inus
            alit mossimo discid explabore adite nam quas alique odi tem fugia
            vendelit ad maximoluptae nobit que simaior itatur abores eum
            raturibus rae volorae ium fugia doles volorro rpore, aligni omniasi
            modisquatis volorem expliqui sunto te pe commolu ptassimpossi
            odigeni temquo conseque maio.
          </p>
        </div>
        <div className="footer-bottom-text contact">
          <p>R. Cláudio Soares, 72 - Pinheiros São Paulo - SP, 05422-030</p>
          <hr />
          <p>(11) 9 9888.2633</p>
          <p>contato@dpinc.com.br</p>
        </div>
        <div className="logoFooter">
          <img src={logoFooter} alt="Logo Footer" />
        </div>
      </div>
    </div>
  );
}
