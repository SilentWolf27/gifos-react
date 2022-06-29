import React, { useState } from "react";
import "@styles/components/Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header>
            <Link to="">
                <span className="icon logo"></span>
            </Link>
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
                        <Link to="favorites">Favoritos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
