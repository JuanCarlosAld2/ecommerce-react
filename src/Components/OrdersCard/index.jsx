import { CalendarDaysIcon, ShoppingBagIcon, ChevronRightIcon  } from '@heroicons/react/24/solid'
import React from "react";

const OrdersCard = ({totalPrice, totalProducts,date}) => {

    


    return (
        <div className='flex justify-between items-center mb-4 border border-black rounded-lg p-4 w-80'>
            <div className=' flex justify-between w-full'>
                <div className='flex flex-col'>
                    <p className='flex gap-1'>
                        <CalendarDaysIcon className='w-6'/>
                        <span className='font-light'>{date}</span>
                    </p>
                    <p className='flex gap-1'>
                        <ShoppingBagIcon className='w-6'/>
                        <span className='font-ligth'>{totalProducts}</span>
                    </p>
                </div>
                <p className='flex items-center gap-2'>
                    <span className='font-medium text-2xl'>{`$${totalPrice}`}</span>
                    <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer'/>
                </p>
            </div>
            
            
        </div>
    )
}

export {OrdersCard}




