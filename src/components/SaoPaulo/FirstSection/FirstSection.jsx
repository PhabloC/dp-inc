import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./FirstSection.css";

// Imagens (substitua pelos caminhos reais das suas imagens)
import image1 from "../../../assets/EmpreendimentoSaoPaulo/entrada.jpg";
import image2 from "../../../assets/EmpreendimentoSaoPaulo/entrada-noite.jpg";
import image3 from "../../../assets/EmpreendimentoSaoPaulo/interior-noite.jpg";
import image4 from "../../../assets/EmpreendimentoSaoPaulo/fundos.jpg";

export default function FirstSection() {
  const slides = [
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
    {
      image: image4,
    },
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
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
