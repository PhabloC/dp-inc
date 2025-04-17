import React from "react";
import "./RedeSociais.css";
import instagramIcon from "../../../assets/Social/instagram.png";
import linkedinIcon from "../../../assets/Social/linkedin.png";

export default function RedeSociais() {
  return (
    <div className="RedeSociais">
      <div className="RedeSociais-content">
        <p>Junte-se a nós</p>
        <div className="iconesSociais">
          {/* Link para o Instagram */}
          <a
            href="https://www.instagram.com/dpincoficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>

          {/* Link para o LinkedIn */}
          <a
            href="https://www.linkedin.com/company/dpinc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
}
