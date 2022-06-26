import React from "react";
import ReactDOM from "react-dom";
import "@styles/components/modal/Modal.scss";

const Modal = ({ children, closeModal }) => {
    return ReactDOM.createPortal(
        <div className="modal-background">
            <div className="modal">
                <div className="modal-title">
                    <span className="modal-close" onClick={closeModal}></span>
                </div>
                <div className="modal-body">{children}</div>
            </div>
        </div>,
        document.getElementById("modal")
    );
};

export default Modal;
