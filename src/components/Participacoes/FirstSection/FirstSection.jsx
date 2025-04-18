import "./FirstSection.css";
import logo from "../../../assets/Participacoes/logo.png";
import oasis from "../../../assets/Participacoes/oasis-saopedro.png";
import palazzo from "../../../assets/Participacoes/palazzo-bevilacqua.png";
import place from "../../../assets/Participacoes/my-place-lourdes.png";
import savassi from "../../../assets/Participacoes/savassi-tower.png";

export default function FirstSection() {
  return (
    <div className="firstSection">
      <div className="firstSection-content">
        <div className="firstSection-texto">
          <p>PARTICIPAÇÕES</p>
        </div>
      </div>
      <div className="firstSection-imagem">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
        </div>
        <div className="galeria">
          <div className="galeria-texto">
            <img src={oasis} alt="Oasis São Pedro" />
            <p>OASIS SÃO PAULO</p>
          </div>
          <div className="galeria-texto">
            <img src={palazzo} alt="Palazzo Bevilacqua" />
            <p>PALAZZO BEVILÁCQUA</p>
          </div>
          <div className="galeria-texto">
            <img src={place} alt="My Place Lourdes" />
            <p>MY PLACE LOURDES</p>
          </div>
          <div className="galeria-texto">
            <img src={savassi} alt="Savassi Tower" />
            <p>SAVASSI TOWER</p>
          </div>
        </div>
      </div>
    </div>
  );
}
