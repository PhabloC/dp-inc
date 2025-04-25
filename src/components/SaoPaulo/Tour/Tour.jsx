import "./Tour.css";
import Globo from "../../../assets/EmpreendimentoSaoPaulo/globo.png";

export default function Tour() {
  return (
    <div className="tour-container">
      <div className="tour-content">
        <p className="tour-titulo">Faça um Tour Virtual 360º</p>
        <div className="tour-texto">
          <a
            href="https://casasp.s3.sa-east-1.amazonaws.com/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Globo} alt="Globo" />
            <p>TOUR VIRTUAL 360º</p>
          </a>
        </div>
      </div>
    </div>
  );
}
