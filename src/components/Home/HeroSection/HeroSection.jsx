import React from "react";
import "./HeroSection.css";
import { Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Imagens (substitua pelos caminhos reais das suas imagens)
import image1 from "../../../assets/PrimeiroSlide/image1.png";
import image2 from "../../../assets/PrimeiroSlide/image2.jpg";
import image3 from "../../../assets/PrimeiroSlide/image3.jpg";
import image4 from "../../../assets/PrimeiroSlide/image4.jpg";

export default function HeroSection() {
  const slides = [
    {
      image: image1,
      description:
        "ESTADO DA ARTE QUE TRANSCENDE O TEMPO, DETALHES QUE SE TRANSFORMAM EM LEGADOS ATEMPORAIS.",
    },
    {
      image: image2,
      description: "ENTRE SOMBRA E LUZ, NASCE O EXTRAORDINÁRIO.",
    },
    {
      image: image3,
      description: "ONDE INOVAÇÃO E TRADIÇÃO CRIAM LUGARES MEMORÁVEIS.",
    },
    {
      image: image4,
      description:
        "O UNIVERSO RESPONDE COM OPORTUNIDADES QUANDO NOS MOVEMOS COM PROPÓSITO.",
    },
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
      loop={true}
      className="hero-swiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <section
            className="hero-section"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
