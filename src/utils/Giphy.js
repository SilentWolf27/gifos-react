import axios from "axios";
const api_key = "12oqxpNDceoORJS6Mwi1bWtXku3BlxV7";
const base_url = "https://api.giphy.com/v1/gifs/";

const getTrendingGifs = (offset, limit) => {
    return axios({
        method: "get",
        baseURL: base_url,
        url: "trending",
        params: {
            api_key: api_key,
            limit: limit,
            offset: offset,
        },
    })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
};

const getAutocomplete = (tag) => {
    return axios({
        method: "get",
        baseURL: base_url,
        url: "search/tags",
        params: {
            api_key: api_key,
            limit: 5,
            q: tag,
        },
    })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
};

const getSearch = (tag) => {
    return axios({
        method: "get",
        baseURL: base_url,
        url: "search",
        params: {
            api_key: api_key,
            limit: 12,
            q: tag,
        },
    })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
};

export { getTrendingGifs, getAutocomplete, getSearch };
