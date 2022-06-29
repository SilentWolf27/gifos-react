import React from "react";
import TrendingSection from "../containers/TrendingSection";
import FavoriteGifs from "../containers/FavoriteGifs";

const Favorites = () => {
    return (
        <React.Fragment>
            <FavoriteGifs />
            <TrendingSection />
        </React.Fragment>
    );
};

export default Favorites;
