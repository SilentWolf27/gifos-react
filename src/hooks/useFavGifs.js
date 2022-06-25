import { useLocalStorage } from "@hooks/useLocalStorage";

const useFavGifs = () => {
    const [favGifs, setFavGifs] = useLocalStorage("fav-gifs", []);

    const saveGifs = (gif) => {
        setFavGifs([...favGifs, gif]);
    };

    return [favGifs, saveGifs];
};

export { useFavGifs };
