import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Noticias.css";

// Imagens (substitua pelos caminhos reais das suas imagens)
import image1 from "../../../assets/Noticias/fachada.jpg";
import image2 from "../../../assets/Noticias/materia01.jpg";
import image3 from "../../../assets/Noticias/materia02.jpg";
import image4 from "../../../assets/Noticias/materia03.jpg";
import image5 from "../../../assets/Noticias/materia04.jpg";

const noticias = [
  {
    imagem: image1,
    data: "DEZEMBRO DE 2024",
    texto:
      "Casa São Paulo é listado entre os condomínios favoritos para público de alta renda segundo matéria do Valor Economico.",
  },
  {
    imagem: image2,
    data: "DEZEMBRO DE 2024",
    texto:
      "Conheça os programas exclusivos para líderes executivos, com um olhar prático e atento às novidades do mundo dos negócios.",
  },
  {
    imagem: image3,
    data: "DEZEMBRO DE 2024",
    texto:
      "Com o curso Estratégia da Incorporação Imobiliária você aprende o cenário ideal para desenvolver planos ...",
  },
  {
    imagem: image4,
    data: "DEZEMBRO DE 2024",
    texto:
      "João Nery trouxe para a turma as diferentes etapas para um desenvolvimento imobiliário bem-sucedido",
  },
  {
    imagem: image5,
    data: "DEZEMBRO DE 2024",
    texto:
      "Manoel Horácio. O nome imponente faz justiça ao homem que o carrega, afinal trata-se de um dos executivos mais respeitados do Brasil ...",
  },
];

export default function Noticias() {
  return (
    <div className="noticias-container">
      <h2 className="noticias-titulo">NOTÍCIAS</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        className="noticias-swiper"
      >
        {noticias.map((noticia, index) => (
          <SwiperSlide key={index}>
            <div className="noticia-card">
              <div className="noticia-imagem-container">
                <img
                  src={noticia.imagem}
                  alt={`Notícia ${index + 1}`}
                  className="noticia-imagem"
                />
              </div>

              <p className="noticia-data">{noticia.data}</p>
              <p className="noticia-texto">{noticia.texto}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
