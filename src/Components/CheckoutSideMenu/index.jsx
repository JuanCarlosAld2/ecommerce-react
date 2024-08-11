import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';
import './CheckoutSideMenu.css'
import React, {useContext} from "react";
import { OrderCard } from '../OrderCard';



const CheckoutSideMenu = () =>{

    const { isCheckoutSideMenu, closeCheckoutSideMenu,shopingCards} = useContext(ShoppingCartContext)

    return (
        <aside className={`${isCheckoutSideMenu ? 'flex' : 'hidden' } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg  bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My order</h2>
                <div className='font-bold cursor-pointer' onClick={closeCheckoutSideMenu}>
                    <XMarkIcon className='h-6 w-6 text-black-500 cursor-pointer' />
                </div>
            </div>
            <div className='px-6'>
                {
                    shopingCards &&
                    shopingCards.map((card)=>(
                        <OrderCard
                            key={card.id}
                            title={card.title}
                            img={card.img}
                            price={card.price}
                        />
                    ))
                }

            </div>
          
            

        </aside>
    );
};


export {CheckoutSideMenu};