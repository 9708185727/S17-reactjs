import React from "react";
import { useDispatch } from "react-redux";
import { RemoveCartProduct } from "../../redux/cart/cartSlice";

const CartCard = ({id,name,brand,category,quantity}) => {
  const dispatch=useDispatch()
    function deleteProduct(){
        dispatch(RemoveCartProduct(id))
     }
  return (
    <div>
        <div className='flex space-x-2 rounded-md w-full'>
      <h1 className="text-1xl "><span className="text-teal-600">Name:</span> {name}</h1>
      <p><span className="text-teal-600">Brand:</span>{brand}</p>
      <p><span className="text-teal-600">Category:</span> {category}</p>
      <p className=""><span className="text-teal-600">Quantity:</span> {quantity}</p>
      <button onClick={deleteProduct} className="bg-red-500 rounded-lg">Delete</button>
    </div>

    <hr />
    </div>
    
  );
};

export default CartCard;
