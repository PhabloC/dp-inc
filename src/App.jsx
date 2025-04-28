import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Participacoes from "./pages/Participacoes";
import Footer from "./components/Footer/Footer.jsx";
import CasaSaoPaulo from "./pages/CasaSaoPaulo.jsx";

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/participacoes" element={<Participacoes />} />
        <Route path="/casa-sao-paulo" element={<CasaSaoPaulo />} />
      </Routes>
      <Footer />
    </Router>
  );
}
