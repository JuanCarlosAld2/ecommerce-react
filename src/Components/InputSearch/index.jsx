import {ShoppingCartContext} from '../../Context/index.jsx'
import React,{useContext} from "react";


const InputSearch = () => {

    const {setSearchByTitle } = useContext(ShoppingCartContext)

    const handleInput = (event) => {

        const {value} = event.target
        setSearchByTitle(value)
    }

    return(
        <input 
            type='text' 
            placeholder='Search a product....' 
            className='rouded-lg border border-black w-80 p-4 mb-4 focus:outline-none'  
            onChange={handleInput}
        />
    )
}

export {InputSearch}