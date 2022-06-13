import React from "react";
import "@styles/components/Gif.scss";

const Gif = ({ src, title, username, gridVersion }) => {
    return (
        <div className={gridVersion ? "gif grid" : "gif"}>
            <img
                className={gridVersion ? "gif-img grid-img" : "gif-img"}
                src={src}
                alt={title}
            />

            <div className="gif-details">
                <div className="gif-details_icons">
                    <span className="gif-icon fav"></span>
                    <span className="gif-icon download"></span>
                    <span className="gif-icon max"></span>
                </div>
                <div className="gif-details_text">
                    <p className="gif-username">{username}</p>
                    <p className="gif-title">{title}</p>
                </div>
            </div>
        </div>
    );
};

export default Gif;
