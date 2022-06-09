import React, { useEffect, useState } from "react";
import Gif from "@components/Gif";
import "@styles/containers/GifSlider.scss";
import { getTrendingGifs } from "@utils/Giphy";

const GifSlider = () => {
    const [loading, setLoading] = useState(true);
    const [gifs, setGifs] = useState([]);
    const [visibleGifs, setvisibleGifs] = useState([]);
    const [offset, setOffset] = useState(0);
    const [isBigScreen, setIsBigScreen] = useState(false);
    const limit = 9;

    const mediaWatcher = window.matchMedia("(min-width: 900px)");
    mediaWatcher.addEventListener("change", (e) => setIsBigScreen(e.matches));

    useEffect(() => {
        setIsBigScreen(mediaWatcher.matches);
        if (!loading) setSliderGifs();
    }, [isBigScreen, loading]);

    useEffect(() => {
        getTrendingGifs(offset, limit)
            .then((data) => {
                setGifs(data.data);
                setLoading(false);
            })
            .catch((error) => {});
    }, []);

    const setSliderGifs = () => {
        if (isBigScreen) {
            setvisibleGifs(gifs.slice(offset, offset + 3));
        } else {
            setvisibleGifs([...gifs]);
        }
    };

    return (
        <div className="slider-container">
            {isBigScreen && <span className="slider-button left"></span>}
            <div className="slider">
                {visibleGifs.map((item) => (
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
