import React from "react";
import "@styles/components/SearchOption.scss";

const SearchOption = ({ name, setValue }) => {
    return (
        <div className="search-option" onClick={() => setValue(name)}>
            <span></span>
            <p>{name}</p>
        </div>
    );
};

export default SearchOption;
