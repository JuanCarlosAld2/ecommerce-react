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
        count,
        setCount,
        activeDetail,
        setActiveDetail,
        productToShow,
        setProductToShow,
        
    } = useLocalStorage(URL, []);

    // Product detail open/close
    const openActiveDetail = () => setActiveDetail(true)
    const closeActiveDetail = () => setActiveDetail(false)


    return (
        <ShoppingCartContext.Provider value={{
            products,
            setProducts,
            loading,
            setLoading,
            error,
            setError,
            fetchData,
            count, 
            setCount,
            activeDetail,
            productToShow,
            setProductToShow,
            openActiveDetail,
            closeActiveDetail,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};


export { ShoppingCartContext, ShoppingCartProvider};

