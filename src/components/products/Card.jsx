import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../api/productapi/products";
import { toast } from "react-toastify";
import ProductModal from "./modal";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/products/productActions";
const ProductCard = ({
  id,
  name,
  brand,
  description,
  price,
  category,
  url,
}) => {

  const [isOpen, setOpen] = useState(false);
  const dispatch=useDispatch()

  function removeProduct() {
    setOpen(true)
  
  }
  
async function confirmDelete() {
  try {
    await deleteProduct(id);
    dispatch(getAllProducts())
  } catch (error) {
    toast(error.response.data, {
      type: "error",
      autoClose: 1500,
    });
  } finally{
    setOpen(false)
  }
}
  return (
    <>
      <div
        key={id}
        className="py-1 mt-6 px-3  shadow-xl bg-white rounded-lg  relative"
      >
        <span className="bg-teal-900 text-xs px-2 py-1 rounded-xl text-white absolute top-2 right-2">
          {category}
        </span>
        <div className="my-4 text-center space-y-3">
          <img
            src={url}
            alt="error image "
            className="w-auto h-36 rounded-lg mx-auto"
          />
          <h1 className="text-2xl text-gray-700 font-semibold">{name}</h1>
          <p className="text-xl">{brand}</p>

          <p>{description}</p>
          <p className="my-2">
            <span className=" text-xl">`Rs.${Math.floor(price * 0.2)}`</span>
            <span className="line-through ml-3 text-sm">Rs.{price}</span>
          </p>
          <div className="flex justify-between">
            <Link to={id}>
              <button className="py-1 px-2 bg-teal-500 rounded-lg hover:bg-teal-300">
                Buy Now
              </button>
            </Link>
            <Link to={`edit/${id}`}>
              <button className="bg-lime-600  py-2 px-3 rounded-lg hover:bg-teal-300">
                <CiEdit />
              </button>
            </Link>
            <button
              onClick={removeProduct}
              className="bg-red-500  py-2 px-3 rounded-lg hover:bg-red-600"
            >
              <MdDelete/>
            </button>
          </div>
        </div>
            <ProductModal isOpen={isOpen} setOpen={setOpen} label="Delete Product" body="Are you sure you want to delete!!"
        button={<button onClick={confirmDelete}>Ok</button>}/>
      </div>
    </>
  );
};

export default ProductCard;
