import { useState, useEffect } from 'react'; 

async function fetchData(urlAPI) {
  const response = await fetch(urlAPI);
    if(!response)  throw new Error(`HTTP error! Status: ${response.status}`)
    const data = await response.json();
    return data
}


const useFetchProducts = (url) => {
    
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  return { products, loading, error };
};

export {useFetchProducts};