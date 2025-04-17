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
import { FiTarget } from "react-icons/fi";

const noticias = [
  {
    imagem: image1,
    data: "DEZEMBRO DE 2024",
    texto:
      "Casa São Paulo é listado entre os condomínios favoritos para público de alta renda segundo matéria do Valor Economico.",
    url: "https://valor.globo.com/patrocinado/imoveis-de-valor/noticia/2024/08/02/mapa-revela-enderecos-favoritos-da-alta-renda.ghtml?utm_campaign=journey_ed_2&utm_medium=email&utm_source=RD+Station",
  },
  {
    imagem: image2,
    data: "DEZEMBRO DE 2024",
    texto:
      "Conheça os programas exclusivos para líderes executivos, com um olhar prático e atento às novidades do mundo dos negócios.",
    url: "https://www.linkedin.com/posts/insper-edu_inspereducacaoexecutiva-educacaoexecutiva-activity-7041170566380150785-GJi6/?utm_source=share&utm_medium=member_ios",
  },
  {
    imagem: image3,
    data: "DEZEMBRO DE 2024",
    texto:
      "Com o curso Estratégia da Incorporação Imobiliária você aprende o cenário ideal para desenvolver planos ...",
    url: "https://ee.insper.edu.br/cursos/mercado-imobiliario/estrategias-da-incorporacao-imobiliaria/",
  },
  {
    imagem: image4,
    data: "DEZEMBRO DE 2024",
    texto:
      "João Nery trouxe para a turma as diferentes etapas para um desenvolvimento imobiliário bem-sucedido",
    url: "https://www.linkedin.com/posts/tamiris-pita_tive-o-privil%C3%A9gio-de-participar-da-1%C2%AA-turma-activity-7062896270025068544-kHGf?utm_source=share&utm_medium=member_desktop",
  },
  {
    imagem: image5,
    data: "DEZEMBRO DE 2024",
    texto:
      "Manoel Horácio. O nome imponente faz justiça ao homem que o carrega, afinal trata-se de um dos executivos mais respeitados do Brasil ...",
    url: "https://www.deducao.com.br/obra-o-equilibrista-narra-a-historia-de-um-dos-maiores-executivos-do-pais/",
  },
];

export default function Noticias() {
  return (
    <div className="noticias-container" id="noticias">
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
              <a href={noticia.url} target="_blank" rel="noopener noreferrer">
                <div className="noticia-imagem-container">
                  <img
                    src={noticia.imagem}
                    alt={`Notícia ${index + 1}`}
                    className="noticia-imagem"
                  />
                </div>
              </a>

              <p className="noticia-data">{noticia.data}</p>
              <p className="noticia-texto">{noticia.texto}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
