import { XMarkIcon} from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';
import { totalPrice } from '../../utils';
//components
import { OrderCard } from '../OrderCard';
//react
import './CheckoutSideMenu.css'
import React, {useContext} from "react";
import { NavLink } from "react-router-dom";






const CheckoutSideMenu = () =>{

    const { isCheckoutSideMenu, closeCheckoutSideMenu,shopingCards,closeActiveDetail,setShopingCards,setCount,setOrders,orders} = useContext(ShoppingCartContext)

    const handleClose = () => {
        closeCheckoutSideMenu(),
        closeActiveDetail()
    }

    const handleDelete = (id) => {
        const newShopingCards = [...shopingCards].filter((card)=> card.id !== id)
        setShopingCards(newShopingCards)
        setCount(newShopingCards.length)
    }

    const handleCheckout = () => {
        closeCheckoutSideMenu()
        const now = new Date();
        const orderToAdd = {
            date:  now.toISOString().slice(0, 10),
            hora: now.toLocaleTimeString(),
            products:shopingCards,
            totalProducts: shopingCards.length,
            totalPrice: totalPrice()

        }

        if(orderToAdd.products.length === 0) return;
        
        setOrders([...orders,orderToAdd])
        setShopingCards([])
        setCount(0)
    }

    return (
        <aside className={`${isCheckoutSideMenu ? 'flex' : 'hidden' } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg  bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My order</h2>
                <div className='font-bold cursor-pointer' onClick={handleClose}>
                    <XMarkIcon className='h-6 w-6 text-black-500 cursor-pointer' />
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    shopingCards &&
                    shopingCards.map((card)=>(
                        <OrderCard
                            key={card.id}
                            id={card.id}
                            title={card.title}
                            img={card.img}
                            price={card.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='py-10 border-t-2 border-t-black w-64 mx-auto'>
                <p className='flex justify-between items-center'>
                    <span className='font-light'>Total: </span>
                    <span className='font-medium text-2xl'>{`$${totalPrice(shopingCards)}`}</span>
                </p>
                <NavLink
                    to='/my-orders/last'
                >
                    <button className='bg-black mt-3 py-3 text-white w-full rounded-3xl ' onClick={handleCheckout}>checkout</button>
                </NavLink>
                
            </div>
        </aside>
    );
};


export {CheckoutSideMenu};



/*

    overflow-y-scroll equivalencia en css:

        .element {
            overflow-y: scroll;
        }

flex-1 = posiciona el elemento en la parte inferiro (en este proyecto)
*/