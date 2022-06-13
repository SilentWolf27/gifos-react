import React, { useState } from "react";
import SearchBar from "@components/SearchBar";
import "@styles/containers/GifSearcher.scss";
import GifGrid from "@containers/GifGrid";

const GifSearcher = () => {
    const [searchValue, setSearchValue] = useState("");
    const [gifs, setGifs] = useState([]);

    return (
        <div className="searcher-container">
            <SearchBar
                value={searchValue}
                setSearchValue={setSearchValue}
                setGifs={setGifs}
            />
            <div className="search-result-container">
                <GifGrid gifs={gifs} />
            </div>
        </div>
    );
};

export default GifSearcher;
