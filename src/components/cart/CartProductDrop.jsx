import React, { useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import CartCardProduct from './CartCardProduct'
import {  useSelector } from 'react-redux'


const CartProductDrop = ({isOpen=false,setOpen}) => {
 const {product}=useSelector((state)=>state.cart)

  return (
    <div className={`max-w-full h-auto bg-slate-300 ${isOpen?"block":"hidden"} py-5 px-4 min-h-36 rounded-md`}>
    
            <div className='max-w-full  items-end '>
           
                <button onClick={()=>setOpen(false)} ><MdOutlineCancel /></button>
              

            </div>
            <hr />
            {product.length==0?( <h1 className='text-2xl font-semibold text-red-300'> Cart is Empty !</h1>):
               ( product.map((cartItem)=>{
                    return <CartCardProduct key={cartItem._id} id={cartItem._id} {...cartItem} />
                }))
            }  

    </div>
  )
}

export default CartProductDrop
