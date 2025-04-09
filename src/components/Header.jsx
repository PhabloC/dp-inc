import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar bg-blue-500">
      <div className="logo">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Serviços</a>
        <a href="#">Depoimentos</a>
        <a href="#">Contato</a>
      </div>
    </nav>
  );
}
