import React, { useEffect, useState } from "react";
import Gif from "@components/Gif";
import "@styles/containers/GifSlider.scss";
import { getTrendingGifs } from "@utils/Giphy";

const GifSlider = () => {
    const [gifs, setGifs] = useState([]);
    const [offset, setOffset] = useState(0);
    const limit = 3;
    const [isBigScreen, setIsBigScreen] = useState(false);

    const mediaWatcher = window.matchMedia("(min-width: 900px)");
    mediaWatcher.addEventListener("change", (e) => setIsBigScreen(e.matches));

    useEffect(() => {
        getTrendingGifs(offset, limit)
            .then((data) => {
                setGifs(data.data);
            })
            .catch((error) => {});
    }, []);

    useEffect(() => {
        setIsBigScreen(mediaWatcher.matches);
    }, [isBigScreen]);

    return (
        <div className="slider-container">
            {isBigScreen && <span className="slider-button left"></span>}
            <div className="slider">
                {gifs.map((item) => (
                    <Gif
                        key={item.id}
                        src={item.images.fixed_height.url}
                        title={item.title}
                        url={item.url}
                        username={item.username}
                    />
                ))}
            </div>
            {isBigScreen && <span className="slider-button right"></span>}
        </div>
    );
};

export default GifSlider;
