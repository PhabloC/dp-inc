import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../../assets/logo.png";
import logoAlternate from "../../../assets/Footer/logo-footer.png"; // Nova logo

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Estado para controlar a logo

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Troca a logo quando o scroll ultrapassa 500px
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 500);
    };

    // Adiciona o ouvinte de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpa o ouvinte ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      {/* Menu Hamburguer à esquerda */}
      <div className="hamburger-container">
        <button
          className="hamburger-button"
          onClick={toggleMenu}
          aria-label="Abrir menu"
          aria-expanded={isOpen}
        >
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
        </button>
        <div className={`menu-content ${isOpen ? "open" : ""}`}>
          <button
            className="close-button"
            onClick={toggleMenu}
            aria-label="Fechar menu"
          >
            <span className="close-bar"></span>
            <span className="close-bar"></span>
          </button>
          <ul>
            <li>
              <a href="#home" onClick={toggleMenu}>
                HOME
              </a>
            </li>
            <li>
              <a href="#institucional" onClick={toggleMenu}>
                INSTITUCIONAL
              </a>
            </li>
            <li>
              <a href="#ventures" onClick={toggleMenu}>
                EMPREENDIMENTOS
              </a>
            </li>
            <li>
              <a href="#noticias" onClick={toggleMenu}>
                NOTÍCIAS
              </a>
            </li>
            <li>
              <a href="#participations" onClick={toggleMenu}>
                PARTICIPAÇÕES
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Logo no centro */}
      <div className="logo">
        <a href="/dp-inc/" className="logo-link">
          {" "}
          {/* Adicionado uma classe para estilização */}
          <img
            src={logo}
            alt="Logo"
            className={`logo-image ${isScrolled ? "fade" : ""}`}
          />
          <img
            src={logoAlternate}
            alt="Logo Alternate"
            className={`logo-image logo-alternate ${isScrolled ? "" : "fade"}`}
          />
        </a>
      </div>

      {/* Contato à direita */}
      <div className="contact-container">
        <a href="#footer" className="contact-text">
          Contato
        </a>
      </div>
    </header>
  );
}
