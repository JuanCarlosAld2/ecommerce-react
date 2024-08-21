/**
 * this function calculates total price of a new order
 * @param {Array} products shopingCards: Array of objects
 * @returns {number} Total price
 */
const totalPrice = (products) => { 

    let total = 0;
    if(!products) return total

    products.forEach((product)=> total += product.price )

    return total
    
}

/**
 * this function returns a json as data 
 * @param {String} urlAPI Endpoint: specific url 
 * @returns {json} All products
 */
//  fetch pentitions
async function fetchData(urlAPI) {
    const response = await fetch(urlAPI);
      if(!response)  throw new Error(`HTTP error! Status: ${response.status}`)
      const data = await response.json();
      return data
}

export {
    totalPrice,
    fetchData,
}














/*
¿por que esta funcion va en utils y no en context ?

r= por que es una funcion pura, lo que significa que no depende del estado de ningun componente ni contexto


utils
    son funciones auxiliares o herramietas que realizan  tareas especificas y suelen ser independites del estado de la aplicacion. Su propocito es ser reutilizadas en varias partes de tu proyecto sin estar atadas al conexto o estado 

*/