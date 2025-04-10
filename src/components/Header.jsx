import { RxHamburgerMenu } from "react-icons/rx";
import "../styles/Header.css";

export default function Header() {
  return (
    <nav className="header">
      <div className="menu-hamburguer">
        <RxHamburgerMenu />
      </div>
      <div className="logo">
        <img src="src/assets/logo.png" alt="logo" />
      </div>
      <div className="header-links">
        <a href="#">Contato</a>
      </div>
    </nav>
  );
}
