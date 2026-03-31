import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./modal.css";

export default function Modal({ isOpen, onClose, children }) {

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("keydown", handleEsc);
        return () => { document.removeEventListener("keydown", handleEsc); };
    }, [onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>×</button>
                {children}
            </div>
        </div>,
        document.getElementById("modal-root")
    );
}