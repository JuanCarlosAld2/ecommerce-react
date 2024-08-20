import { ShoppingCartContext } from '../../Context';
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../Components/layaout';
import { OrdersCard } from '../../Components/OrdersCard';


function MyOrders() {

  const {orders} = useContext(ShoppingCartContext)


  const renderOrdersCard = () => {

    return orders.map((order) => (
      <Link key={order.id} to={`/my-orders/${order.id}`}>
        <OrdersCard
          key={order.id}
          totalPrice={order.totalPrice}
          totalProducts={order.totalProducts}
          date={order.date}
        />
      </Link>
    ));
  };

  return (
    
    <Layout >
        <div className='flex items-center justify-center relative w-80 mb-12'>
          <h1 className='font-medium text-xl'>My orders</h1>
        </div>
        {
          renderOrdersCard()
        }
     
    </Layout>
  )
}

export {MyOrders}

