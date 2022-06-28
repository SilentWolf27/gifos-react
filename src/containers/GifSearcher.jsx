import React, { useState, useEffect, useContext } from "react";
import SearchBar from "@components/SearchBar";
import GifGrid from "@containers/GifGrid";
import { getSearch } from "@utils/Giphy";
import TrendingTopics from "@components/TrendingTopics";
import AppContext from "@context/AppContext";
import NoResultsIcon from "@assets/icons/icon-busqueda-sin-resultado.svg";
import "@styles/containers/GifSearcher.scss";

const GifSearcher = () => {
    const [searchValue, setSearchValue] = useState("");
    const [gifs, setGifs] = useState([]);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(Number.POSITIVE_INFINITY);
    const [haveSearched, setHaveSearched] =
        useContext(AppContext).useHaveSearched;

    useEffect(() => {
        if (offset !== 0) setOffset(0);
    }, [searchValue]);

    const search = (value, add = false) => {
        getSearch(value, offset).then((data) => {
            setOffset(offset + 13);
            setLimit(data.pagination.total_count);
            setGifs(add ? [...gifs, ...data.data] : data.data);
            setHaveSearched(true);
        });
    };

    return (
        <div className="searcher-container">
            <SearchBar
                value={searchValue}
                setSearchValue={setSearchValue}
                search={search}
            />
            {!haveSearched && (
                <TrendingTopics
                    setSearchValue={setSearchValue}
                    search={search}
                />
            )}

            <div className="search-result-container">
                {searchValue !== "" && <h3>{searchValue}</h3>}
                {gifs.length > 0 && <GifGrid gifs={gifs} />}
                {offset <= limit && searchValue &&(
                    <button
                        className="btn-showmore"
                        onClick={() => search(searchValue, true)}
                    >
                        VER MÁS
                    </button>
                )}
            </div>

            {gifs.length == 0 && haveSearched && (
                <div className="noresults-container">
                    <img src={NoResultsIcon} alt="Sin resultados" />
                    <p>Intenta con otra búsqueda.</p>
                </div>
            )}
        </div>
    );
};

export default GifSearcher;
