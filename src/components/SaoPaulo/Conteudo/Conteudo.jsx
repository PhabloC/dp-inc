import "./Conteudo.css";
import frente from "../../../assets/TerceiroSlide/frente.jpg";
import equilibrio from "../../../assets/EmpreendimentoSaoPaulo/equilibrio.png";
import fundos from "../../../assets/TerceiroSlide/fundos.jpg";
import integracao from "../../../assets/EmpreendimentoSaoPaulo/integracao.png";
import contemplacao from "../../../assets/EmpreendimentoSaoPaulo/contemplacao.png";
import quarto from "../../../assets/EmpreendimentoSaoPaulo/quarto.jpg";
import sala from "../../../assets/EmpreendimentoSaoPaulo/sala.png";
import sofisticacao from "../../../assets/EmpreendimentoSaoPaulo/sofisticacao.png";
import linha from "../../../assets/EmpreendimentoSaoPaulo/line.jpg";

export default function Conteudo() {
  return (
    <div className="conteudo-container">
      <div className="conteudo-content esquerda">
        <img src={frente} alt="" className="image1" />
        <img src={equilibrio} alt="" className="image2" />
      </div>
      <div className="conteudo-content direita">
        <img src={integracao} alt="" className="image2" />
        <img src={fundos} alt="" className="image1" />
      </div>
      <div className="conteudo-content esquerda">
        <img src={quarto} alt="" className="image1" />
        <img src={contemplacao} alt="" className="image2" />
      </div>
      <div className="conteudo-content direita">
        <img src={sofisticacao} alt="" className="image2" />
        <img src={sala} alt="" className="image1" />
      </div>
      <div className="garagem">
        <div className="garagem-content">
          <div className="garagem-texto">
            <h3>Surpreendente</h3>
            <img src={linha} alt="linha" />
            <p>
              A decoração da garagem com madeira nas paredes e no teto e a
              iluminação planejada, trazem elegância e sofisticação à entrada do
              hall social. São sete vagas amplas e privativas para cada unidade,
              com ponto individual para carro elétrico.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
