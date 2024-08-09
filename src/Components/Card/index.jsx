import { PlusIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';
import React,{useContext} from 'react';



const Card = ({title,price,category,img,description}) => {
    
    const {setCount, count, openActiveDetail,setProductToShow} = useContext(ShoppingCartContext)

    const añadirCompra = (event) => {
        event.stopPropagation();
        setCount(count + 1)
    }

    const showProduct = () => {
        const Product = {
            title,
            price,
            category,
            img,
            description
        }
        openActiveDetail()
        setProductToShow(Product)
        
    }

    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg' onClick={showProduct}>

            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{category}</span>
                <img className='w-full h-full object-cover rounded-lg' src={img} alt={title} />
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1' onClick={añadirCompra}>
                    <PlusIcon className='h-6 w-6 text-black-500'/>
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{title}</span>
                <span className='text-lg font-medium'>{`$${price}`}</span>
            </p>
        </div>
        

    )
}

export {Card}


/*
 white/60 = 60 => opacidad

*/