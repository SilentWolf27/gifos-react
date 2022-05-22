import React from "react";
import "@styles/components/Footer.scss"

const Footer = () => {
  return (
    <footer>
      <p>Compartir en:</p>
      <div className="social-container">
        <span className="social-icon facebook"></span>
        <span className="social-icon twitter"></span>
        <span className="social-icon instagram"></span>
      </div>
      <p className="copyright">Gifos 2022 All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
