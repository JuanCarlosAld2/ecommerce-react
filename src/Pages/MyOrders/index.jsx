import {ShoppingCartContext} from '../../Context/index.jsx'
import { OrderCard } from '../../Components/OrderCard';
import React, {useContext} from 'react';
import { Layout } from '../../Components/layaout';


function MyOrders() {

  const {orders} = useContext(ShoppingCartContext)

  console.log(orders);
  

  return (
    
    <Layout >
      My Orders
      <div className='flex flex-col w-80'>
        {
          orders.length > 0 && 
          orders?.slice(-1)[0].products?.map((product)=>(
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

export {MyOrders}


/*
   <OrderCard
              key={card.id}
              id={card.id}
              title={card.title}
              img={card.img}
              price={card.price}
            />


*/