import React, { useState } from "react";
import ProductForm from "../../components/products/Form";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";


import Title from "../../components/Title";

const AddProduct = () => {
 
  const navigate=useNavigate()
  
  return (
    <>
 
   
        <button onClick={()=>navigate(-1)} className="ms-16 shadow-md px-3 py-2   inline">
          <BiLeftArrowAlt className="inline" /> Back
        </button>
  
      <div className="text-center w-auto ">
        <Title label='Add Product' className="mb-4 ml-24"/>
      
      <ProductForm />
      </div>
     

 
    </>
  );
};

export default AddProduct;
