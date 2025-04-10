import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
          {/* Botão de fechar (X) */}
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
              <a href="#institutional" onClick={toggleMenu}>
                INSTITUCIONAL
              </a>
            </li>
            <li>
              <a href="#ventures" onClick={toggleMenu}>
                EMPREENDIMENTOS
              </a>
            </li>
            <li>
              <a href="#news" onClick={toggleMenu}>
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
        <img src={logo} alt="Logo" />
      </div>

      {/* Contato à direita */}
      <div className="contact-container">
        <span className="contact-text">Contato</span>
      </div>
    </header>
  );
}
