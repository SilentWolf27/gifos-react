import React, { useContext } from "react";
import GifSearcher from "../containers/GifSearcher";
import GifSlider from "../containers/GifSlider";
import HomeIcon from "@assets/ilustra_header.svg";
import AppContext from "@context/AppContext";
import "@styles/pages/Home.scss";

const Home = () => {
    const [haveSearched, setHaveSearched] =
        useContext(AppContext).useHaveSearched;

    return (
        <React.Fragment>
            {!haveSearched && (
                <React.Fragment>
                    <h1>
                        Inspírate, busca, guarda y crea los mejores{" "}
                        <span>GIFOS</span>
                    </h1>
                    <div className="home-icon-container">
                        <img
                            className="home-icon"
                            src={HomeIcon}
                            alt="Personas abrazandose"
                        />
                    </div>
                </React.Fragment>
            )}
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
