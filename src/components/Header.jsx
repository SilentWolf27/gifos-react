import React from "react";
import "Styles/components/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img />
      <nav className="menu">
        <ul>
          <li>
            <a>Modo Nocturno</a>
          </li>
          <li>
            <a>Favoritos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
