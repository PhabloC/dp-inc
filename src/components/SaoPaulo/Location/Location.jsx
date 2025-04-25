import "./Location.css";
import Line from "../../../assets/EmpreendimentoSaoPaulo/line.png";
import LogoRed from "../../../assets/EmpreendimentoSaoPaulo/logo-red.png";

export default function Location() {
  return (
    <div className="location">
      <div className="location-container">
        <img src={Line} alt="Linha" />
        <p>Localização privilegiada</p>
        <img src={Line} alt="Linha" />
      </div>
      <div className="location-content">
        <div className="location-content-text">
          <img src={LogoRed} alt="logo-red" />
          <div>
            <p>Av. Prof. Fonseca Rodrigues, 369</p>
            <p>Alto de Pinheiros - São Paulo/SP.</p>
          </div>
          <div className="location-metragem">
            <div>
              <p>Área do terreno</p>
              <p>1.200 m²</p>
            </div>
          </div>
        </div>
        <div className="location-content-map">
          <iframe
            title="mapa"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1828.7436480578049!2d-46.712387!3d-23.550936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce582c169c72d7%3A0xc9d4885e3e35dde9!2sHanei%20Minoru!5e0!3m2!1spt-BR!2sus!4v1745544404424!5m2!1spt-BR!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }} /* Corrigido para ser um objeto */
            allowFullScreen /* Corrigido para camelCase */
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" /* Corrigido para camelCase */
          ></iframe>
        </div>
      </div>
    </div>
  );
}
