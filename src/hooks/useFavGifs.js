import { useLocalStorage } from "@hooks/useLocalStorage";

const useFavGifs = () => {
    const [favGifs, setFavGifs] = useLocalStorage("fav-gifs", []);

    const saveGifs = (gifs) => {
        setFavGifs([...gifs]);
    };

    return [favGifs, saveGifs];
};

export { useFavGifs };
