import axios from "axios";
const api_key = "12oqxpNDceoORJS6Mwi1bWtXku3BlxV7";
const base_url = "https://api.giphy.com/v1/gifs/";

const getTrendingGifs = (offset, limit) => {
  axios({
    method: "get",
    baseURL: base_url,
    url: "trending",
    params: {
      api_key: api_key,
      limit: limit,
      offset: offset,
    },
  })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

export { getTrendingGifs };
