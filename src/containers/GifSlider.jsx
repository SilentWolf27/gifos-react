import React, { useContext, useEffect, useState } from "react";
import Gif from "@components/Gif";
import { getTrendingGifs } from "@utils/Giphy";
import AppContext from "@context/AppContext";
import "@styles/containers/GifSlider.scss";

const GifSlider = () => {
    const [loading, setLoading] = useState(true);
    const [gifs, setGifs] = useState([]);
    const [visibleGifs, setVisibleGifs] = useState([]);
    const [offset, setOffset] = useState(0);
    const { isBigScreen } = useContext(AppContext);
    const MIN_INDEX = 0;
    const MAX_INDEX = 27;

    useEffect(() => {
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
                {visibleGifs.map((gif) => (
                    <Gif
                        key={gif.id}
                        id={gif.id}
                        src={gif.images.fixed_height.url}
                        title={gif.title}
                        url={gif.url}
                        username={gif.username}
                        gridVersion={false}
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
