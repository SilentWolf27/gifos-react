import { useState } from "react";
import { useMediaMatcher } from "@hooks/useMediaMatcher";
import { useFavGifs } from "@hooks/useFavGifs";

const useInitialState = () => {
    const [isBigScreen] = useMediaMatcher("(min-width: 900px)");
    const [favGifs, setFavGifs] = useFavGifs();

    return { isBigScreen, useFavGifs: [favGifs, setFavGifs] };
};

export { useInitialState };
