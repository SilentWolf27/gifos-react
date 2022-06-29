import React from "react";
import GifSlider from "../containers/GifSlider";
import "@styles/containers/TrendingSection.scss";

const TrendingSection = () => {
    return (
        <div className="trending-section">
            <h2>Trending GIFOS</h2>
            <p>
                Mira los últimos <br /> GIFOS de la comunidad{" "}
            </p>
            <GifSlider />
        </div>
    );
};

export default TrendingSection;
