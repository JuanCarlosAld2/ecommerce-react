import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import {ShoppingCartContext} from '../../Context/index.jsx'
import { OrderCard } from '../../Components/OrderCard';
import React, {useContext} from 'react';
import { Layout } from '../../Components/layaout';
import { array } from 'prop-types';

function MyOrder() {

  const {orders} = useContext(ShoppingCartContext)

  const currentPath = window.location.pathname
  const arrayPath = currentPath.split('/')
  let ID = arrayPath[arrayPath.length - 1]

   // Si ID es "last", obtenemos el último pedido
   let selectedOrder;
   if (ID === "last") {
     selectedOrder = orders[orders.length - 1];
   } else {
     // Si ID es un número, intentamos encontrar el pedido con ese id
     selectedOrder = orders.find(order => order.id === parseInt(ID));
   }

  return (
    
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <Link to={`/my-orders`} className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'/>
        </Link>
        <h1>My Order</h1>
      </div>

      <div className='flex flex-col w-80'>
        {
          orders.length > 0 && 
          selectedOrder?.products.map((product)=>(
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              img={product.img}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export {MyOrder}

/*
slice(-1) invierte el array

*/