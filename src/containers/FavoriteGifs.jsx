import React, { useContext } from "react";
import FavIcon from "@assets/icons/icon-favoritos.svg";
import NoFavs from "@assets/icons/icon-fav-sin-contenido.svg";
import AppContext from "@context/AppContext";
import GifGrid from "@containers/GifGrid";
import "@styles/containers/FavoriteGifs.scss";

const FavoriteGifs = () => {
    const [favGifs] = useContext(AppContext).useFavGifs;

    return (
        <div className="favorites-container">
            <img src={FavIcon} alt="Icono favoritos" className="fav-icon" />
            <h2>Favoritos</h2>

            {favGifs.length == 0 ? (
                <div className="nofav-container">
                    <img src={NoFavs} alt="Sin favoritos" />
                    <p>
                        "¡Guarda tu primer GIFO en Favoritos para que se muestre
                        aquí!"
                    </p>
                </div>
            ) : (
                <div className="fav-grid-container">
                    <GifGrid gifs={favGifs} />
                </div>
            )}
        </div>
    );
};

export default FavoriteGifs;
