import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilters, setLimit, setSort } from '../../redux/products/productSlice'

const ProductFilters = () => {
    const {categories,query } = useSelector((state) => state.products);
    const dispatch=useDispatch()
    function setProductLimit(limit){
        console.log(limit)
        dispatch(setLimit(parseInt(limit)))

    }
    function setProductSort(sort){
        console.log(sort)
        dispatch(setSort(sort))

    }
    function setProductFilterByName(value){
        console.log(value)
        dispatch(setFilters({name:value}))

    }
    function setProductFilterByCategory(value){
        console.log(value)
        dispatch(setFilters({category:value}))

    }
  return (
    <div className='bg-white rounded-md px-1 py-2 mt-4 grid grid-cols-[1fr,1fr,auto,auto]' >
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id='name' value={query?.filters?.name} className='border rounded-sm ml-2 px-2 '    onChange={(e)=>setProductFilterByName(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <select value={query?.filters?.category}  name="category" id="category" className='border rounded-sm ml-2 px-2 '  onChange={(e)=>setProductFilterByCategory(e.target.value)}>
        <option value="" disabled>select</option>
         {categories.map((category,index)=>(
           <option key={index} value={category}>{category}</option>
         ))}
        </select>
             </div>
      <div>
        <label htmlFor="sort">Sort:</label>
        <select value={query?.sort}  name="sort" id="sort" className='border ml-2 px-2'onChange={(e)=>setProductSort(e.target.value)} >
         
            <option value={JSON.stringify({createdAt:-1})}>Latest</option>
            <option value={JSON.stringify({price:1})}>Price:Low to High</option>
            <option value={JSON.stringify({price:-1})}>Price:High to Low</option>
        </select>
      </div>
      <div className='ml-1'>
        <label htmlFor="limit">Limit:</label>
        <select value={query?.limit}  name="limit" id="limit" className='border ml-2 px-2' onChange={(e)=>setProductLimit(e.target.value)} >
         
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
        </select>
      </div>
      
      
    </div>
  )
}

export default ProductFilters
