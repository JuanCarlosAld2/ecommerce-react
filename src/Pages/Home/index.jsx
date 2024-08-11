import { Layout } from '../../Components/layaout'
import { Card } from '../../Components/Card'
import { ProductDetail } from '../../Components/ProductDetail';
import { ShoppingCartContext } from '../../Context';
import React, {useContext} from 'react';
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu';



function Home() {



  const {products} = useContext(ShoppingCartContext)

  return (
    
    <Layout>
        home

        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>

          {
            products &&
            products.map((product)=>(
              <Card
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                img={product.image}
                description={product.description}
              />
            ))
          
          }
        </div>
          <ProductDetail/>
          <CheckoutSideMenu/>
    </Layout>
  ) 
}

export {Home}