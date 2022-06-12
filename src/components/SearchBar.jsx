import React, { useState } from "react";
import { getAutocomplete } from "@utils/Giphy.js";
import "@styles/components/SearchBar.scss";
import SearchOption from "@components/SearchOption";

const SearchBar = ({ value, setSearchValue }) => {
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
        setOptions([]);
    };

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input
                    placeholder="Busca GIFOS y más"
                    onChange={handleChange}
                    value={value}
                />
                <span></span>
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
