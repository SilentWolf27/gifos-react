import React, { useState } from "react";
import "@styles/components/Header.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <span className="icon logo"></span>
      {showMenu ? (
        <span className="icon close-icon" onClick={handleClick}></span>
      ) : (
        <span className="icon burger-icon" onClick={handleClick}></span>
      )}
      <nav className={showMenu ? "menu show" : "menu"}>
        <ul>
          <li>
            <span>Modo Nocturno</span>
          </li>
          <li>
            <a href="">Favoritos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
