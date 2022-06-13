import React from "react";
import GifSearcher from "../containers/GifSearcher";
import GifSlider from "../containers/GifSlider";
import "@styles/pages/Home.scss";

const Home = () => {
    return (
        <React.Fragment>
            <GifSearcher />
            <div className="trending-section">
                <h2>Trending GIFOS</h2>
                <p>
                    Mira los últimos <br /> GIFOS de la comunidad{" "}
                </p>
                <GifSlider />
            </div>
        </React.Fragment>
    );
};

export default Home;
