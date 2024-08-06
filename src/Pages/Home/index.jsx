import { Layout } from '../../Components/layaout'
import { Card } from '../../Components/Card'
import { useFetchProducts } from './useFetchProducts';

function Home() {

  const URL = 'https://api.escuelajs.co/api/v1/products';

  const { products, loading, error } = useFetchProducts(URL);

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