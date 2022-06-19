const { useState, useEffect } = require("react");

const useMediaMatcher = (mediaQuery) => {
    const mediaWatcher = window.matchMedia(mediaQuery);
    const [matches, setMatches] = useState(false);

    mediaWatcher.addEventListener("change", (e) => setMatches(e.matches));

    useEffect(() => {
        setMatches(mediaWatcher.matches);
    }, []);

    return [matches, setMatches];
};

export { useMediaMatcher };
