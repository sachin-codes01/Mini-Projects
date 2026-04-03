import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Toast.css';
import { useToast } from './ToastContext';

const ToastContainer = () => {
    const { toasts } = useToast();

    return ReactDOM.createPortal(
        <div className="toast-wrapper">
            {toasts.map(toast => (
                <div key={toast.id} className={`toast ${toast.type}`}>
                    {toast.message}
                </div>
            ))}
        </div>,
        document.body
    );
};

export default ToastContainer;