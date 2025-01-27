import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Title from "../Title";
import { addProduct, editProduct } from "../../api/productapi/products";
import { useNavigate } from "react-router";
import { PRODUCT_ROUTE } from "../../constants/routes";
import { toast } from "react-toastify";
import Spinner from "../Spinner";

const ProductForm = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm({
    values: product,
  });
  const { errors } = formState;
  const isEditing = product ? true : false;
  const navigate = useNavigate();
  async function submitForm(data) {
    setLoading(true);
    try {
      if (isEditing) {
        await editProduct(product._id, data);
      } else {
        await addProduct(data);
      }
      toast(
        `Product ${isEditing ? "Edited" : "Added"} successfully`,

        {
          type: "success",
          autoClose: 1500,
        }
      );
      setLoading(false);
      navigate(PRODUCT_ROUTE);
    } catch (error) {
      // console.log(error.response.data);
      toast(error.response.data, {
        type: "error",
        autoClose: 1500,
      });
      setLoading(false);
    }
  }
  return (
    <div className="max-w-screen-xl  px-12 md:px-0 lg:px-0 ">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="w-full md:w-1/2 lg:1/2 sm:ms-12 md:ms-60 lg:ms-72 bg-slate-100 py-10 px-14 shadow"
      >
        <div className="py-1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "name is required",
            })}
            className="w-full mt-1 py-1 px-2 rounded"
          />
          <p className="text-red-500 text-sm my-1 mt-2">
            {errors.name?.message}
          </p>
        </div>
        <div className="py-1">
          <label htmlFor="brand">Brand</label>
          <input
            type="text"
            id="brand"
            {...register("brand", {
              required: "brand is required",
            })}
            className="w-full mt-1 py-1 px-2 rounded"
          />
          <p className="text-red-500 text-sm my-1 mt-2">
            {errors.brand?.message}
          </p>
        </div>
        <div className="py-1">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            {...register("category", {
              required: "brand is required",
            })}
            className="w-full mt-1 py-1 px-2 rounded"
          />
          <p className="text-red-500 text-sm my-1 mt-2">
            {errors.category?.message}
          </p>
        </div>
        <div className="py-1">
          <label htmlFor="price">price</label>
          <input
            type="Number"
            id="price"
            {...register("price", {
              required: "price is required",
              min: {
                value: 0,
                message: "price should be positive ",
              },
            })}
            className="w-full mt-1 py-1 px-2 rounded"
          />
          <p className="text-red-500 text-sm my-1 mt-2">
            {errors.price?.message}
          </p>
        </div>

        <div className="py-1">
          <label htmlFor="description">description</label>
          <input
            type="text"
            id="description"
            {...register("description", {
              required: "description is required",
            })}
            className="w-full mt-1 py-1 px-2 rounded"
          />
          <p className="text-red-500 text-sm my-1 mt-2">
            {errors.description?.message}
          </p>
        </div>
        <div className="py-1">
          <label htmlFor="url">Image url</label>
          <input
            type="url"
            id="url"
            {...register("url", {
              required: "url is required",
            })}
            className="w-full mt-1 py-1 px-2 rounded"
          />
          <p className="text-red-500 text-sm my-1 mt-2">
            {errors.url?.message}
          </p>
        </div>
        <div className="mt-5 text-center">
          <button
            disabled={loading}
            type="submit"
            className="bg-teal-700 disabled:cursor-not-allowed text-white rounded px-5 py-1 cursor-pointer flex items-center mx-auto "
          >
            {isEditing ? "Update" : "AddProduct"}
            {loading ? (
              <Spinner className="w-[1.2rem] h-[1.2rem] ml-2" />
            ) : null}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
