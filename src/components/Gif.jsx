import React, { useContext, useEffect, useState } from "react";
import AppContext from "@context/AppContext";
import { getBlobGif } from "@utils/Giphy";
import "@styles/components/Gif.scss";

const Gif = ({ src, title, username, gridVersion, id, url }) => {
    const [favGifs, setFavGifs] = useContext(AppContext).useFavGifs;
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        const item = favGifs.find((gif) => id == gif.id);
        setIsFav(!!item);
    }, []);

    const handleFavGif = () => {
        const gif = {
            src,
            title,
            username,
            id,
            url,
        };

        if (isFav) {
            removeGifFromFavs(gif);
        } else {
            addGifToFavs(gif);
        }
    };

    const addGifToFavs = (gif) => {
        setFavGifs(gif);
        setIsFav(true);
    };

    const removeGifFromFavs = (gif) => {
        const idx = favGifs.findIndex((item) => item.id == gif.id);
        setFavGifs(favGifs.splice(idx, 1));
        setIsFav(false);
    };

    const downloadGif = () => {
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

    return (
        <div className={gridVersion ? "gif grid" : "gif"}>
            <img
                className={gridVersion ? "gif-img grid-img" : "gif-img"}
                src={src}
                alt={title}
            />

            <div className="gif-details">
                <div className="gif-details_icons">
                    <span
                        className={
                            isFav ? "gif-icon fav active" : "gif-icon fav"
                        }
                        onClick={handleFavGif}
                    ></span>
                    <span
                        className="gif-icon download"
                        onClick={downloadGif}
                    ></span>
                    <span className="gif-icon max"></span>
                </div>
                <div className="gif-details_text">
                    <p className="gif-username">{username}</p>
                    <p className="gif-title">{title}</p>
                </div>
            </div>
        </div>
    );
};

export default Gif;
