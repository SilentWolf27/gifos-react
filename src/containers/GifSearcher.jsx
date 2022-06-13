import React, { useState, useEffect } from "react";
import SearchBar from "@components/SearchBar";
import "@styles/containers/GifSearcher.scss";
import GifGrid from "@containers/GifGrid";
import { getSearch } from "@utils/Giphy";
const GifSearcher = () => {
    const [searchValue, setSearchValue] = useState("");
    const [gifs, setGifs] = useState([]);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(Number.POSITIVE_INFINITY);

    useEffect(() => {
        if (offset !== 0) setOffset(0);
    }, [searchValue]);

    const search = (value, add = false) => {
        getSearch(value, offset).then((data) => {
            setOffset(offset + 12);
            setLimit(data.pagination.total_count);
            setGifs(add ? [...gifs, ...data.data] : data.data);
        });
    };

    return (
        <div className="searcher-container">
            <SearchBar
                value={searchValue}
                setSearchValue={setSearchValue}
                search={search}
            />
            {gifs.length > 0 && (
                <div className="search-result-container">
                    {searchValue !== "" && <h3>{searchValue}</h3>}
                    <GifGrid gifs={gifs} />
                    {offset <= limit && (
                        <button
                            className="btn-showmore"
                            onClick={() => search(searchValue, true)}
                        >
                            VER MÁS
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default GifSearcher;
