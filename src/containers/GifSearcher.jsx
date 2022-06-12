import React, { useState } from "react";
import SearchBar from "@components/SearchBar";
import "@styles/containers/GifSearcher.scss";

const GifSearcher = () => {
    const [searchValue, setSearchValue] = useState("");
    const [gifs, setGifs] = useState([]);

    return (
        <div className="searcher-container">
            <SearchBar value={searchValue} setSearchValue={setSearchValue} />
        </div>
    );
};

export default GifSearcher;
