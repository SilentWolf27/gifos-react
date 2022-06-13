import React, { useState } from "react";
import { getAutocomplete, getSearch } from "@utils/Giphy.js";
import "@styles/components/SearchBar.scss";
import SearchOption from "@components/SearchOption";

const SearchBar = ({ value, setSearchValue, setGifs }) => {
    const [options, setOptions] = useState([]);

    const handleChange = ({ target }) => {
        setSearchValue(target.value);
        autocomplete(target.value);
    };

    const autocomplete = (value) => {
        getAutocomplete(value).then((data) => {
            setOptions(data.data);
        });
    };

    const handleOptionClicked = (value) => {
        setSearchValue(value);
        handleSearch(value);
    };

    const handleKeyUp = ({ keyCode }) => {
        if (keyCode === 13) handleSearch(value);
    };

    const handleSearch = (value) => {
        if (value !== "") {
            setOptions([]);
            getSearch(value).then((data) => setGifs(data.data));
        }
    };

    const clear = () => {
        if (value !== "") {
            setSearchValue("");
            setOptions([]);
        }
    };

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input
                    placeholder="Busca GIFOS y más"
                    onChange={handleChange}
                    onKeyUp={handleKeyUp}
                    value={value}
                />
                <span
                    className={value !== "" ? "clear" : ""}
                    onClick={clear}
                ></span>
                {value !== "" && (
                    <span
                        className="left"
                        onClick={() => handleSearch(value)}
                    ></span>
                )}
            </div>
            {options.length > 0 && (
                <div className="search-options-container">
                    {options.map((option, idx) => (
                        <SearchOption
                            key={idx}
                            name={option.name}
                            setValue={handleOptionClicked}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
