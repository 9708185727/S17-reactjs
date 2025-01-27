
import { BiLeftArrowAlt } from "react-icons/bi";

import Title from "../../components/Title";
import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

import { getProductById } from "../../api/productapi/products";
import ProductForm from "../../components/products/Form";
import Spinner from "../../components/Spinner";

const EditProduct = () => {
  const params = useParams();
  const navigate=useNavigate()
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProductById(params.id)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        toast(error.response.data, {
          type: "error",
          autoClose:1500,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params.id]);
  return (
    <>
      <div >
        <button
          onClick={() => navigate(-1)}
          className="ms-16 shadow-md px-3 py-2   inline"
        >
          <BiLeftArrowAlt className="inline" /> Back
        </button>

        <div className="text-center w-auto ">
          <Title label="Edit Product" className="mb-4 ml-24" />
          {loading ? <Spinner /> : null}

          <ProductForm product={product} />
        </div>
      </div>
    </>
  );
};

export default EditProduct;
