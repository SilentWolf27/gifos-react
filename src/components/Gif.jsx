import React, { useContext, useEffect, useState } from "react";
import AppContext from "@context/AppContext";
import { downloadGif } from "@utils/Giphy";
import GifModal from "@components/modal/GifModal";
import "@styles/components/Gif.scss";

const Gif = ({ src, title, username, gridVersion, id, url }) => {
    const { useFavGifs } = useContext(AppContext);
    const [favGifs, setFavGifs] = useFavGifs;
    const [isFav, setIsFav] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        const item = favGifs.find((gif) => id == gif.id);
        setIsFav(!!item);
    }, []);

    const handleFavGif = () => {
        const gif = {
            images: {
                fixed_height: {
                    url: src,
                },
            },
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
        setFavGifs([...favGifs, gif]);
        setIsFav(true);
    };

    const removeGifFromFavs = (gif) => {
        const idx = favGifs.findIndex((item) => item.id == gif.id);
        const items = JSON.parse(JSON.stringify(favGifs));
        items.splice(idx, 1);
        setFavGifs(items);
        setIsFav(false);
    };

    const handleDownload = () => {
        downloadGif(id, title);
    };

    const handleModal = () => {
        setModalIsOpen(!modalIsOpen);
    };

    return (
        <React.Fragment>
            <div className={gridVersion ? "gif grid" : "gif"}>
                <img
                    className={gridVersion ? "gif-img grid-img" : "gif-img"}
                    src={src}
                    alt={title}
                    onClick={handleModal}
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
                            onClick={handleDownload}
                        ></span>
                        <span
                            className="gif-icon max"
                            onClick={handleModal}
                        ></span>
                    </div>
                    <div className="gif-details_text">
                        <p className="gif-username">{username}</p>
                        <p className="gif-title">{title}</p>
                    </div>
                </div>
            </div>
            {modalIsOpen && (
                <GifModal
                    src={src}
                    title={title}
                    id={id}
                    username={username}
                    closeModal={handleModal}
                    isFav={isFav}
                    onFav={handleFavGif}
                    onDownload={handleDownload}
                />
            )}
        </React.Fragment>
    );
};

export default Gif;
