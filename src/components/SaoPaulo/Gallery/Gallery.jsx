import "./Gallery.css";
import { useState } from "react";

const images = [
  "https://picsum.photos/300/200?random=1",
  "https://picsum.photos/300/200?random=2",
  "https://picsum.photos/300/200?random=3",
  "https://picsum.photos/300/200?random=4",
  "https://picsum.photos/300/200?random=5",
  "https://picsum.photos/300/200?random=6",
  "https://picsum.photos/300/200?random=7",
  "https://picsum.photos/300/200?random=8",
];

function Lightbox({ images, currentIndex, onClose }) {
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
            currentIndex={selectedImageIndex}
            onClose={() => setSelectedImageIndex(null)}
          />
        )}
      </div>
    </div>
  );
}
