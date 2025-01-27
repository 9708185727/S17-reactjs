
import React from 'react'
import ProductLoadingCard from './ProductLoaderCard'

const ProductsLoader = () => {
  return (
    <div className='grid my-2 grid-cols-1 space-y-2 space-x-3 mx-10 md:grid-cols-2 lg:grid-cols-3'>
      <ProductLoadingCard/>
      <ProductLoadingCard/>
      <ProductLoadingCard/>
      <ProductLoadingCard/>
      <ProductLoadingCard/>
      <ProductLoadingCard/>
      <ProductLoadingCard/>
      <ProductLoadingCard/>
      <ProductLoadingCard/>
    
 
    </div>
  )
}

export default ProductsLoader