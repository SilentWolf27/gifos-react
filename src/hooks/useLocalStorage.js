const { useState } = require("react");

const useLocalStorage = (key, initialState) => {
    const localStorageItem = localStorage.getItem(key);
    let parsedItem;

    if (!localStorageItem) {
        localStorage.setItem(key, JSON.stringify(initialState));
        parsedItem = initialState;
    } else {
        parsedItem = JSON.parse(localStorageItem);
    }

    const [item, setItem] = useState(parsedItem);

    const saveItem = (newItem) => {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(key, stringifiedItem);
        setItem(newItem);
    };

    return [item, saveItem];
};

export { useLocalStorage };
