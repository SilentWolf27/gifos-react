import React from "react";
import Gif from "@components/Gif";
import "@styles/containers/GifGrid.scss";

const GifGrid = ({ gifs }) => {
    return (
        <div className="grid-container">
            {gifs.map((gif) => (
                <Gif
                    key={gif.id}
                    src={gif.images.fixed_height.url}
                    title={gif.title}
                    url={gif.url}
                    username={gif.username}
                    gridVersion={true}
                />
            ))}
        </div>
    );
};

export default GifGrid;
