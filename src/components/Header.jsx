import React from "react";
import "@styles/components/Header.scss";

const Header = () => {
  return (
    <header>
      <span className="icon logo"></span>
      <span className="icon menu-icon"></span>
      <nav className="menu">
        <ul>
          <li>
            <a href="">Modo Nocturno</a>
          </li>
          <li>
            <a href="">Favoritos</a>
          </li>
          <li>
            <a href="">Inicio</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
