import React, { useState, useEffect } from "react";


function useLocalStorage(url,initialValue){

    const [products, setProducts] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
        


    async function fetchData(urlAPI) {
        const response = await fetch(urlAPI);
          if(!response)  throw new Error(`HTTP error! Status: ${response.status}`)
          const data = await response.json();
          return data
    }


    
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
    fetchData

}

}


export {useLocalStorage}
