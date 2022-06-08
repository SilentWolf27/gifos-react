import React from "react";
import "@styles/components/Gif.scss";

const Gif = ({ src, title, username }) => {
    return (
        <div className="trending-gif">
            <img className="trending-img" src={src} alt={title} />

            <div className="trending-details">
                <div className="trending-details_icons">
                    <span className="trending-icon fav"></span>
                    <span className="trending-icon download"></span>
                    <span className="trending-icon max"></span>
                </div>
                <div className="trending-details_text">
                    <p className="trending-username">{username}</p>
                    <p className="trending-title">{title}</p>
                </div>
            </div>
        </div>
    );
};

export default Gif;
