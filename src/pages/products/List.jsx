import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import ProductCard from "../../components/products/Card";

import { Link } from "react-router-dom";
import ProductsLoader from "../../components/products/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getAllProducts } from "../../redux/products/productActions";
import ProductFilters from "../../components/products/Filters";
import { resetFilter } from "../../redux/products/productSlice";

const List = () => {
 
  const {products,loading,query}=useSelector(state=>state.products)

  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getAllProducts(query))
    dispatch(getAllCategories())
  }, [dispatch,query])
 function resetAllFilters(){
  dispatch(resetFilter())
 }
  return (
    <>
      <section className=" py-5  bg-slate-100">
        <div className="max-w-screen-xl mx-12 px-4 ">
          <div className="flex justify-between text-center ">
            <Title label="New Arrivals" />
           <div>
           <Link to={"add"}>
              <button className="bg-teal-500 hover:bg-teal-800 rounded-lg px-3 py-2">
                Add
              </button>
              
            </Link>
            <button onClick={resetAllFilters} className="bg-teal-500 ml-3 hover:bg-teal-800 rounded-lg px-3 py-2">
                ResetFilters
              </button>
           </div>
          </div>
          <div>
            <ProductFilters/>


          </div>
          {loading?<ProductsLoader/>:
          <div className="grid  gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {products.length===0?(<div className="text-red-300 text-2xl w-full ml-96 mt-36">Product's not found </div>):(products.map((product) => {
              return (
                <ProductCard key={product._id} id={product._id} {...product} />
              );
            }))}
          </div>}
        </div>
      </section>
    </>
  );
};

export default List;
