import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';
import './ProductDetail.css'
import React, {useContext} from "react";


const ProductDetail = () => {

    const {activeDetail, closeActiveDetail,productToShow} = useContext(ShoppingCartContext)
    

    return (
        <aside className={`${activeDetail ? 'flex' : 'hidden' } product-detail flex-col fixed right-0 border border-black rounded-lg  bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div className='font-bold cursor-pointer' onClick={closeActiveDetail}>
                    <XMarkIcon className='h-6 w-6 text-black-500' />
                </div>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg' src={productToShow.img} alt={productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${productToShow.price}</span>
                <span className='font-medium text-md'>${productToShow.title}</span>
                <span className='font-light text-sm'>${productToShow.description}</span>
            </p>
        </aside>
    )

}

export { ProductDetail }










/*
<XMarkIcon/ > = viene de heroicons.com se instalo y se importa com componente XMark es el nombre se cambia y se deja Icon ArchiveBoxXMark + Icon (ArchiveBoxXMarkIcon)



etiqueta 

tailwind
p = pading

<aside></aside> =  defime un bloque de contenido relacionado con el contenido porncipal. Generalmente se muestra como una barra lateral


Existen cosas muy especificas de css que tailwind no tiene por lo que se debe realizar con css o configurarlo

*/ 