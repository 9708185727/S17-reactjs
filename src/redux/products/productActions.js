import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductCategories, getProducts } from "../../api/productapi/products";
const getAllProducts=createAsyncThunk("products/all",async(query,{rejectWithValue})=>{
    try {
      const response= await getProducts(query||{});
      return response.data;
    } catch (error) {
        return rejectWithValue( error.response?.data);
    }
  })
  const getAllCategories=createAsyncThunk("products/categories",async(_,{rejectWithValue})=>{
    try {
      const response= await getProductCategories();

      return response.data;
    } catch (error) {
        return rejectWithValue( error.response?.data);
    }
  })
  export {getAllProducts,getAllCategories}