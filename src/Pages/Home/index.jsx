import { Layout } from '../../Components/layaout'
import { Card } from '../../Components/Card'
import { ProductDetail } from '../../Components/ProductDetail';
import { InputSearch } from '../../Components/InputSearch';
import { ShoppingCartContext } from '../../Context';
import React, {useContext} from 'react';
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu';



function Home() {

//ya comenze codigo no te espantes 

  const {products} = useContext(ShoppingCartContext)

  return (
    
    <Layout>

        <div className='flex items-center justify-center relative w-80 mb-4'>
          <h1 className='font-medium text-xl'>Exclusive Products</h1>
        </div>
        
       
        <div className='mb-5 mt-5'>
          <InputSearch/>
        </div>
        

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