import { Layout } from '../../Components/layaout'
import { Card } from '../../Components/Card'
import { ShoppingCartContext } from '../../Context';
import React from 'react';
function Home() {



  const {products} = React.useContext(ShoppingCartContext)

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
                category={product.category?.name}
                img={product.images[0]}
              />
            ))
          
          }
    

        </div>    
    </Layout>
  ) 
}

export {Home}