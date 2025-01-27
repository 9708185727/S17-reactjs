import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import iphone from "../../assets/image/image.png";
import Title from "../../components/Title";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { getProductById } from "../../api/productapi/products";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddToCartProduct } from "../../redux/cart/cartSlice";
const Details = () => {
  const navigate = useNavigate();
  const params = useParams();
  // console.log(params.id);
const dispatch=useDispatch()
  const [loading, setLoading] = useState(false);
  const [products, setProduct] = useState([]);
  console.log(products);
  useEffect(() => {
    setLoading(true);
    getProductById(params.id)
      .then((response) => {
        //console.log(response)
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [params.id]);
  function AddToCart(){
    // console.log(products)
    dispatch(AddToCartProduct(products))
  }
  if (loading)
    return <div className="text-center font-bold text-4xl">loading.....</div>;
  return (
    <>
      <section className=" py-5  bg-slate-100">
        <div className="max-w-screen-xl mx-12 px-4 ">
          <button
            onClick={() => navigate(-1)}
            className="py-1 px-4 bg-slate-500 rounded-lg hover:bg-slate-700 "
          >
            <FaLongArrowAltLeft />
          </button>
          <div className="flex flex-col md:flex-row items-center justify-around">
            <img
              src={products.url}
              alt="error image "
              className="md:w-1/2 rounded-sm"
            />

            <div className="md:w-1/2 ml-6 space-y-4">
              <div className="flex my-2 text-orange-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <span className="bg-teal-900 text-white text-xs px-2 py-1 rounded-xl">
             {products.category}
              </span>
              <Title label={products.name} />
              <p className="py-2 text-justify">
               {products.description}
              </p>
              <p>{products.brand}</p>

              <button onClick={AddToCart} className="py-2 px-3  bg-teal-500 rounded-lg hover:bg-teal-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
