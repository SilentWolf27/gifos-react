import React, { useEffect, useState } from "react";
import Gif from "@components/Gif";
import "@styles/containers/GifSlider.scss";
import { getTrendingGifs } from "@utils/Giphy";

const GifSlider = () => {
  const [gifs, setGifs] = useState([]);
  const [sliderConfig, setSliderConfig] = useState({ offset: 0, limit: 9 });

  useEffect(() => {
    getTrendingGifs(sliderConfig.offset, sliderConfig.limit)
      .then((data) => {
        setGifs(data.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="slider">
      {gifs.map((item) => (
        <Gif
          key={item.id}
          src={item.images.fixed_height.url}
          title={item.title}
          url={item.url}
        />
      ))}
    </div>
  );
};

export default GifSlider;
