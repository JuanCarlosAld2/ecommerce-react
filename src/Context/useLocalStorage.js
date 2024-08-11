import React, { useState, useEffect } from "react";


function useLocalStorage(url,initialValue){

  // application: load
    const [loading, setLoading] = useState(true);

  //full of errors
    const [error, setError] = useState(null);

  // all products 
    const [products, setProducts] = useState(initialValue);

  // shopping cart - increment queatity
    const [count, setCount] = useState(0)

  //Product detail open/close
    const [activeDetail, setActiveDetail] = useState(false)

  //Checkout Side Menu open/close
    const [isCheckoutSideMenu, setIsCheckoutSideMenu] = useState(false)
    console.log("j", isCheckoutSideMenu);
    

  //only product
    const [productToShow, setProductToShow] = useState({})

  // shoping Cart - Add products to cart
    const [shopingCards, setShopingCards] = useState([])

     console.log("aqui hando", shopingCards);
    
        

  //  fetch pentitions
  async function fetchData(urlAPI) {
      const response = await fetch(urlAPI);
        if(!response)  throw new Error(`HTTP error! Status: ${response.status}`)
        const data = await response.json();
        return data
  }


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
}

}


export {useLocalStorage}
