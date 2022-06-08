import React, { useEffect, useState } from "react";
import Gif from "@components/Gif";
import "@styles/containers/GifSlider.scss";
import { getTrendingGifs } from "@utils/Giphy";

const GifSlider = () => {
    const [gifs, setGifs] = useState([]);
    const [offset, setoffset] = useState(0);
    const limit = 9;

    useEffect(() => {
        getTrendingGifs(offset, limit)
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
                    username={item.username}
                />
            ))}
        </div>
    );
};

export default GifSlider;
