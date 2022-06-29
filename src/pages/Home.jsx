import React, { useContext } from "react";
import GifSearcher from "../containers/GifSearcher";
import TrendingSection from "../containers/TrendingSection";
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
            <TrendingSection />
        </React.Fragment>
    );
};

export default Home;
