import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Apresentacao from "./components/Apresentacao";
import SaoPaulo from "./components/SaoPaulo";
import SecondSlide from "./components/SecondSlide";
import ThirdSlide from "./components/ThirdSlide";
import FourthSlide from "./components/FourthSlide";
import FundoFixo from "./components/FundoFixo";
import RedeSociais from "./components/RedeSociais";
import Footer from "./components/Footer";
import Noticias from "./components/Noticias";

export default function App() {
  return (
    <div className="App">
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
      <Footer />
    </div>
  );
}
