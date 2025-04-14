import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Apresentacao from "./components/Apresentacao";
import SaoPaulo from "./components/SaoPaulo";
import SecondSlide from "./components/SecondSlide";
import ThirdSlide from "./components/ThirdSlide";
import FourthSlide from "./components/FourthSlide";
import FundoFixo from "./components/FundoFixo";

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
      <FundoFixo />
    </div>
  );
}
