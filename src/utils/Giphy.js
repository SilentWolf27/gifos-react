import axios from "axios";
const api_key = "12oqxpNDceoORJS6Mwi1bWtXku3BlxV7";
const base_url = "https://api.giphy.com/v1/";

const _gifAPI = (method, url, params = {}) => {
    return axios({
        method: method,
        baseURL: base_url,
        url: url,
        params: {
            api_key: api_key,
            ...params,
        },
    })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
};

const getTrendingGifs = (offset, limit) => {
    return _gifAPI("get", "gifs/trending", { limit: limit, offset: offset });
};

const getAutocomplete = (tag) => {
    return _gifAPI("get", "gifs/search/tags", { limit: 5, q: tag });
};

const getSearch = (tag, offset = 0) => {
    return _gifAPI("get", "gifs/search", { limit: 12, q: tag, offset: offset });
};

const getTrendingTopics = () => {
    return _gifAPI("get", "trending/searches").then((data) => {
        data.data = data.data.splice(0, 6);
        return data;
    });
};

const getBlobGif = (gifId) => {
    return axios({
        method: "GET",
        url: `https://media0.giphy.com/media/${gifId}/giphy.gif`,
        responseType: "blob",
    }).then((response) => response.data);
};

const downloadGif = (id, title) => {
    getBlobGif(id).then((data) => {
        const a = document.createElement("a");
        a.download = title.replaceAll(" ", "");
        a.href = window.URL.createObjectURL(data);
        a.dataset.downloadurl = [
            "application/octet-stream",
            a.download,
            a.href,
        ].join(":");

        a.click();
    });
};

export {
    getTrendingGifs,
    getAutocomplete,
    getSearch,
    getTrendingTopics,
    getBlobGif,
    downloadGif,
};
