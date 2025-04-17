import React from "react";
import "./FourthSlide.css";
import { Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Imagens (substitua pelos caminhos reais das suas imagens)
import image1 from "../../../assets/QuartoSlide/entrada.png";
import image2 from "../../../assets/QuartoSlide/entrada.png";
import image3 from "../../../assets/QuartoSlide/entrada.png";
import image4 from "../../../assets/QuartoSlide/entrada.png";

export default function HeroSection() {
  const slides = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
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
            {/* Quadrado com o texto à direita */}
            <div className="square-text">
              <h2>+ CASA SÃO PAULO</h2>
              <h3>JARDINS</h3>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
