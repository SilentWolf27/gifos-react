import React from "react";
import "@styles/components/Gif.scss";

const Gif = ({ src, title }) => {
  return (
    <div className="trending-gif">
      <img src={src} alt={title} />
    </div>
  );
};

export default Gif;
