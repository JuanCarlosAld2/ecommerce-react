import { Layout } from '../../Components/layaout'
import { Card } from '../../Components/Card'
import { ProductDetail } from '../../Components/ProductDetail';
import { InputSearch } from '../../Components/InputSearch';
import { ShoppingCartContext } from '../../Context';
import React, {useContext} from 'react';
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu';



function Home() {

//ya comenze codigo no te espantes 

  const {products,searchByTitle,filteredProducts} = useContext(ShoppingCartContext)

  const renderView = () =>{
    if (searchByTitle?.length > 0) {
        return (
          filteredProducts.length === 0 ? 
            <div className='relative left-72 border w-96 h-96 flex items-center justify-center font-black text-3xl shadow-2xl bg-black text-white rounded-lg'>
              No products found
            </div>
          :
          filteredProducts.map((product)=>(
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
        )
    }else{
      return(
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
        
      )
    }

  }

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
            renderView()
          }
        </div>
          <ProductDetail/>
          <CheckoutSideMenu/>

    </Layout>
  ) 
}

export {Home}