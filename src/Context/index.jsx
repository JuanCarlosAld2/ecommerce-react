import React, { createContext } from "react";
import { useLocalStorage } from "./useLocalStorage";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
    const URL = 'https://fakestoreapi.com/products';

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
        shopingCards, 
        setShopingCards,
        isCheckoutSideMenu, 
        setIsCheckoutSideMenu,
        orders, 
        setOrders,
        searchByTitle, 
        setSearchByTitle,
        
    } = useLocalStorage(URL, []);

    // Product detail open/close
    const openActiveDetail = () => setActiveDetail(true)
    const closeActiveDetail = () => setActiveDetail(false)

    // Checkout Side Menu open/close
    const openCheckOutSideMenu = () => setIsCheckoutSideMenu(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false)


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
            shopingCards, 
            setShopingCards,
            isCheckoutSideMenu,
            openCheckOutSideMenu,
            closeCheckoutSideMenu,
            orders, 
            setOrders,
            searchByTitle, 
            setSearchByTitle,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};


export { ShoppingCartContext, ShoppingCartProvider};

