import Header from "../components/Home/HeaderHome/Header";
import Noticias from "../components/Home/Noticias/Noticias";
import RedeSociais from "../components/Home/RedeSociais/RedeSociais";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import Apresentacao from "../components/Home/Apresentacao/Apresentacao";
import SaoPaulo from "../components/Home/SaoPaulo/SaoPaulo";
import SecondSlide from "../components/Home/SecondSlide/SecondSlide";
import ThirdSlide from "../components/Home/ThirdSlide/ThirdSlide";
import FourthSlide from "../components/Home/FourthSlide/FourthSlide";
import FundoFixo from "../components/Home/FundoFixo/FundoFixo";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Apresentacao />
      <SaoPaulo />
      <SecondSlide />
      <ThirdSlide />
      <FourthSlide />
      <Noticias />
      <FundoFixo />
      <RedeSociais />
    </div>
  );
}
