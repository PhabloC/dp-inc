// SecondSlide.js
import React from "react";
import "../styles/SecondSlide.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Imagens (substitua pelos caminhos reais das suas imagens)
import image1 from "../assets/SegundoSlide/imagemVisao.png";
import image2 from "../assets/SegundoSlide/imagemInovacao.png";
import image3 from "../assets/SegundoSlide/imagemCompromisso.png";
import image4 from "../assets/SegundoSlide/imagemGovernança.png";
import image5 from "../assets/SegundoSlide/imagemConexao.png";
import retanguloVerde from "../assets/SegundoSlide/retanguloVerde.png";

export default function SecondSlide() {
  const carouselData = [
    {
      image: image1,
      title: "Visão",
      description:
        "Transformamos o conceito de moradia em experiências de vida extraordinárias, criando obras-primas arquitetônicas que transcendem o habitat e estabelecem novos paradigmas no mercado imobiliário de altíssimo padrão.",
    },
    {
      image: image2,
      title: "Inovação",
      description:
        "Reimaginamos constantemente os limites do design e da funcionalidade, integrando visão criativa com excelência técnica para criar experiências de moradia únicas que antecipam tendências e elevam o padrão do morar contemporâneo.",
    },
    {
      image: image3,
      title: "Excelência",
      description:
        "Nosso compromisso com a qualidade artesanal define cada empreendimento que entregamos. Dedicamos atenção meticulosa a cada detalhe, selecionando apenas os materiais mais nobres e exigindo acabamentos impecáveis. Esta busca pela perfeição não é apenas nossa filosofia, mas nossa assinatura",
    },
    {
      image: image4,
      title: "Governança",
      description:
        "Elevamos a governança corporativa a um patamar de excelência. Nossa gestão é guiada por padrões rigorosos que se refletem em cada etapa do nosso processo. Do planejamento à entrega final, nossos empreendimentos incorporam nossos valores fundamentais de qualidade e integridade. Esta consistência garante que nossos produtos não apenas atendam, mas superem expectativas, gerando prosperidade compartilhada para todos os nossos stakeholders - investidores, clientes, colaboradores e comunidades. É assim que construímos não apenas edificações, mas um legado de confiança duradoura.",
    },
    {
      image: image5,
      title: "Conexão",
      description:
        "Acreditamos que a verdadeira essência de um projeto extraordinário nasce das conexões entre pessoas. Valorizamos cada indivíduo que participa de nossa jornada criativa, reconhecendo sua contribuição única para o resultado final. Nossa preocupação com as relações humanas manifesta-se na escuta atenta, na transparência com parceiros e na valorização genuína de cada contribuição. Entendemos que quando as pessoas se sentem verdadeiramente conectadas ao propósito, o extraordinário se torna o padrão natural de excelência que define a assinatura DP Inc.",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      loop={true}
      className="carousel"
    >
      {carouselData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="slide-content">
            {/* Renderiza a imagem e o texto na ordem correta com base no índice */}
            {index % 2 === 0 ? (
              <>
                <div className="image-wrapper image-left">
                  <div className="background-frame">
                    <img
                      src={retanguloVerde}
                      alt="Retângulo Verde"
                      className="background-image"
                    />
                  </div>
                  <img
                    src={item.image}
                    alt={`Imagem do slide ${index + 1}`}
                    className="foreground-image"
                  />
                </div>
                <div className="text-container">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </>
            ) : (
              <>
                <div className="text-container">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
                <div className="image-wrapper image-right">
                  <div className="background-frame">
                    <img
                      src={retanguloVerde}
                      alt="Retângulo Verde"
                      className="background-image"
                    />
                  </div>
                  <img
                    src={item.image}
                    alt={`Imagem do slide ${index + 1}`}
                    className="foreground-image"
                  />
                </div>
              </>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
