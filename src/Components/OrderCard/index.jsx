import { XMarkIcon } from '@heroicons/react/24/solid'
import React from "react";

const OrderCard = ({id,title, img, price, handleDelete}) => {

    let renderXMarlIcon;
    if(handleDelete) {
       renderXMarlIcon = <XMarkIcon className='h-6 w-6 text-black-500 cursor-pointer' onClick={()=>handleDelete(id)} />
    }
    return (
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={img} alt={title} />
                </figure>
                <p className='text-sm font-light '>{title}</p>
            </div>
            <div className='flex items-center gap-2'> 
                <p className='text-lg font-medium'>{price}</p>
                {
                    renderXMarlIcon
                }
            </div> 
            
            
        </div>
    )
}

export {OrderCard}


/*
object-cover = no dañar la imagen
*/