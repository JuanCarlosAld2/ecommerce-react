import React, { createContext } from "react";
import { useLocalStorage } from "./useLocalStorage";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
    const URL = 'https://api.escuelajs.co/api/v1/products';

    const {
        products,
        setProducts,
        loading,
        setLoading,
        error,
        setError,
        fetchData,
    } = useLocalStorage(URL, []);

    return (
        <ShoppingCartContext.Provider value={{
            products,
            setProducts,
            loading,
            setLoading,
            error,
            setError,
            fetchData
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};


export { ShoppingCartContext, ShoppingCartProvider};

