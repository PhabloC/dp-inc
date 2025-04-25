import "./Gallery.css";
import { useState } from "react";
import imagem1 from "../../../assets/EmpreendimentoSaoPaulo/imagem1.jpg";
import imagem2 from "../../../assets/EmpreendimentoSaoPaulo/imagem2.jpg";
import imagem3 from "../../../assets/EmpreendimentoSaoPaulo/imagem3.jpg";
import imagem4 from "../../../assets/EmpreendimentoSaoPaulo/imagem4.jpg";
import imagem5 from "../../../assets/EmpreendimentoSaoPaulo/imagem5.jpg";
import imagem6 from "../../../assets/EmpreendimentoSaoPaulo/imagem6.jpg";
import imagem7 from "../../../assets/EmpreendimentoSaoPaulo/imagem7.jpg";
import imagem8 from "../../../assets/EmpreendimentoSaoPaulo/imagem8.jpg";
import imagem9 from "../../../assets/EmpreendimentoSaoPaulo/imagem9.jpg";
import imagem10 from "../../../assets/EmpreendimentoSaoPaulo/imagem10.jpg";
import imagem11 from "../../../assets/EmpreendimentoSaoPaulo/imagem11.jpg";
import imagem12 from "../../../assets/EmpreendimentoSaoPaulo/imagem12.jpg";
import imagem13 from "../../../assets/EmpreendimentoSaoPaulo/imagem13.jpg";
import imagem14 from "../../../assets/EmpreendimentoSaoPaulo/imagem14.jpg";
import imagem15 from "../../../assets/EmpreendimentoSaoPaulo/imagem15.jpg";
import imagem16 from "../../../assets/EmpreendimentoSaoPaulo/imagem16.jpg";

const images = [
  imagem1,
  imagem2,
  imagem3,
  imagem4,
  imagem5,
  imagem6,
  imagem7,
  imagem8,
  imagem9,
  imagem10,
  imagem11,
  imagem12,
  imagem13,
  imagem14,
  imagem15,
  imagem16,
];

const descriptions = [
  "Perspectiva ilustrada da vista aérea do empreendimento",
  "Perspectiva ilustrada do átrio de acesso social",
  "Perspectiva ilustrada da cozinha, do espaço gourmet e da varanda externa",
  "Perspectiva ilustrada diurna da entrada da fachada",
  "Pesperctiva ilustrada da entrada da fachada",
  "Perspectiva ilustrada do hall de acesso",
  "Perspectiva ilustrada dos fundos do espaço gourmet",
  "Pespectiva ilustrada da fachada lateral",
  "Perspectiva ilustrada do living",
  "Perspectiva ilustrada da acdemia",
  "Perspectiva ilustrada noturna do rooftop",
  "Perspectiva ilustrada noturna do rooftop",
  "Perspectiva ilustrada da sala de estar e do escritório no rooftop",
  "Perspectiva ilustrada da adega",
  "Perspectiva ilustrada do acesso à garagem",
  "Perspectiva ilustrada da suite máster",
];

function Lightbox({ images, descriptions, currentIndex, onClose }) {
  const [index, setIndex] = useState(currentIndex);

  const handlePrev = (e) => {
    e.stopPropagation(); // Impede o clique de propagar e fechar o lightbox
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation(); // Impede o clique de propagar e fechar o lightbox
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="lightbox" onClick={onClose}>
      <img
        src={images[index]}
        alt="Imagem ampliada"
        className="lightbox-image"
        onClick={(e) => e.stopPropagation()}
      />
      <p className="lightbox-description">{descriptions[index]}</p>
      <button className="lightbox-close" onClick={onClose}>
        ×
      </button>
      <button className="lightbox-nav lightbox-prev" onClick={handlePrev}>
        ❮
      </button>
      <button className="lightbox-nav lightbox-next" onClick={handleNext}>
        ❯
      </button>
    </div>
  );
}

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  return (
    <div className="gallery">
      <div className="gallery-container">
        <h1>Galeria de Imagens</h1>
        <div className="gallery-grid">
          {images.map((src, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => setSelectedImageIndex(index)}
            >
              <img
                src={src}
                alt={`Imagem ${index + 1}`}
                className="gallery-image"
              />
            </div>
          ))}
        </div>
        {selectedImageIndex !== null && (
          <Lightbox
            images={images}
            descriptions={descriptions}
            currentIndex={selectedImageIndex}
            onClose={() => setSelectedImageIndex(null)}
          />
        )}
      </div>
    </div>
  );
}
