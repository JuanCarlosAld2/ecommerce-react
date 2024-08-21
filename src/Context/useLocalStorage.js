import React, { useState, useEffect } from "react";
import { fetchData } from "../utils";


function useLocalStorage(url,initialValue){

  // application: load
    const [loading, setLoading] = useState(true);

  //full of errors
    const [error, setError] = useState(null);

  // all products -get products 
    const [products, setProducts] = useState(initialValue);

  //filter Products - 
    const [filteredProducts, setFilteredProducts] = useState([])
    
  // shopping cart - increment queatity
    const [count, setCount] = useState(0)

  //Product detail open/close
    const [activeDetail, setActiveDetail] = useState(false)

  //Checkout Side Menu open/close
    const [isCheckoutSideMenu, setIsCheckoutSideMenu] = useState(false)

  //only product
    const [productToShow, setProductToShow] = useState({})

  // shoping Cart - Add products to cart
    const [shopingCards, setShopingCards] = useState([])

  //Shoping Cart - Order    
    const [orders, setOrders] = useState([])

  //get products by title search
    const [searchByTitle, setSearchByTitle] = useState('')
    

  // Uploading data to all products

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetchData(url);

        if (!response) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        setProducts(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [url]);
    



return {
    products,
    setProducts,
    loading,
    setLoading,
    error,
    setError,
    count, 
    setCount,
    activeDetail,
    setActiveDetail,
    productToShow,
    setProductToShow,
    fetchData,
    shopingCards, 
    setShopingCards,
    isCheckoutSideMenu, 
    setIsCheckoutSideMenu,
    orders, 
    setOrders,
    searchByTitle, 
    setSearchByTitle,
    filteredProducts,
    setFilteredProducts,
}

}


export {useLocalStorage}
