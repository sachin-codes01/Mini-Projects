import React, { createContext, useReducer, useContext } from 'react';

const ToastContext = createContext();

const ADD_TOAST = 'ADD_TOAST';
const REMOVE_TOAST = 'REMOVE_TOAST';

const toastReducer = (state, action) => {
    switch (action.type) {
        case ADD_TOAST:
            return [...state, action.payload];
        case REMOVE_TOAST:
            return state.filter(toast => toast.id !== action.id);
        default:
            return state;
    }
};

export const ToastProvider = ({ children }) => {
    const [toasts, dispatch] = useReducer(toastReducer, []);

    const addToast = (message, type = 'success') => {
        const id = Date.now();
        dispatch({ type: ADD_TOAST, payload: { id, message, type } });

        // Auto remove after 3s
        setTimeout(() => {
            dispatch({ type: REMOVE_TOAST, id });
        }, 3000);
    };

    return (
        <ToastContext.Provider value={{ toasts, addToast }}>
            {children}
        </ToastContext.Provider>
    );
};

export const useToast = () => useContext(ToastContext);