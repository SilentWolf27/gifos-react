import React from "react";
import Modal from "@components/modal/Modal";
import "@styles/components/modal/GifModal.scss";

const GifModal = ({
    src,
    title,
    username,
    id,
    closeModal,
    isFav,
    onFav,
    onDownload,
}) => {
    return (
        <Modal closeModal={closeModal}>
            <div className="gif-modal-image">
                <img src={src} />
            </div>
            <div className="gif-modal-details">
                <div className="gif-modal-text">
                    <p>{username}</p>
                    <p className="gif-modal-title">{title}</p>
                </div>
                <div className="modal-icons-container">
                    <span
                        className={
                            isFav
                                ? "gif-modal-icon fav active"
                                : "gif-modal-icon fav"
                        }
                        onClick={onFav}
                    ></span>
                    <span
                        className="gif-modal-icon download"
                        onClick={onDownload}
                    ></span>
                </div>
            </div>
        </Modal>
    );
};

export default GifModal;
