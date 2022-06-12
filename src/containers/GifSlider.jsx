import React, { useEffect, useState } from "react";
import Gif from "@components/Gif";
import "@styles/containers/GifSlider.scss";
import { getTrendingGifs } from "@utils/Giphy";

const GifSlider = () => {
    const [loading, setLoading] = useState(true);
    const [gifs, setGifs] = useState([]);
    const [visibleGifs, setVisibleGifs] = useState([]);
    const [offset, setOffset] = useState(0);
    const [isBigScreen, setIsBigScreen] = useState(false);
    const MIN_INDEX = 0;
    const MAX_INDEX = 27;

    const mediaWatcher = window.matchMedia("(min-width: 900px)");
    mediaWatcher.addEventListener("change", (e) => setIsBigScreen(e.matches));

    useEffect(() => {
        setIsBigScreen(mediaWatcher.matches);
        if (!loading) setSliderGifs();
    }, [isBigScreen, loading]);

    useEffect(() => {
        loadGifs(offset, 9)
            .then(() => setLoading(false))
            .catch((error) => {});
    }, []);

    const loadGifs = (offset, limit, updateVisible = false) => {
        return getTrendingGifs(offset, limit).then((data) => {
            setGifs([...gifs, ...data.data]);
            if (updateVisible) setVisibleGifs([...gifs, ...data.data]);
        });
    };

    const setSliderGifs = () => {
        if (isBigScreen) {
            setVisibleGifs(gifs.slice(offset, offset + 3));
        } else {
            setVisibleGifs([...gifs]);
        }
    };

    const slideLeft = () => {
        setVisibleGifs(gifs.slice(offset - 1, offset + 2));
        setOffset(offset - 1);
    };

    const slideRight = () => {
        setVisibleGifs(gifs.slice(offset + 1, offset + 4));
        if (!gifs[offset + 4]) {
            loadGifs(offset + 4, 3).then(() => {
                setOffset(offset + 1);
            });
        } else {
            setOffset(offset + 1);
        }
    };

    const handleScroll = (event) => {
        const currentScroll = event.target.scrollLeft;
        const maxScroll = event.target.scrollWidth - event.target.clientWidth;
        if (currentScroll >= maxScroll && gifs.length < MAX_INDEX) {
            loadGifs(gifs.length + 2, 6, true).then(() => {});
        }
    };

    return (
        <div className="slider-container">
            {isBigScreen && (
                <button
                    className="slider-button"
                    onClick={slideLeft}
                    disabled={offset === MIN_INDEX}
                >
                    <span className="slider-button-icon left"></span>
                </button>
            )}
            <div className="slider" onScroll={handleScroll}>
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
            {isBigScreen && (
                <button
                    className="slider-button"
                    onClick={slideRight}
                    disabled={offset === MAX_INDEX - 3}
                >
                    <span className="slider-button-icon right"></span>
                </button>
            )}
        </div>
    );
};

export default GifSlider;
