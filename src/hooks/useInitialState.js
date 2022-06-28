import { useState } from "react";
import { useMediaMatcher } from "@hooks/useMediaMatcher";
import { useFavGifs } from "@hooks/useFavGifs";

const useInitialState = () => {
    const [isBigScreen] = useMediaMatcher("(min-width: 900px)");
    const [favGifs, setFavGifs] = useFavGifs();
    const [haveSearched, setHaveSearched] = useState(false);

    return {
        isBigScreen,
        useFavGifs: [favGifs, setFavGifs],
        useHaveSearched: [haveSearched, setHaveSearched],
    };
};

export { useInitialState };
