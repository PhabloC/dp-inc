import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Apresentacao from "./components/Apresentacao";
import SaoPaulo from "./components/SaoPaulo";
import SecondSlide from "./components/SecondSlide";

export default function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Apresentacao />
      <SaoPaulo />
      <SecondSlide />
    </div>
  );
}
