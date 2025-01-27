import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginForm, registerForm } from "../../api/auth/user";

const userLogin=createAsyncThunk("auth/login",async(data,{rejectWithValue})=>{
  try {
    const response= await loginForm(data);
    localStorage.setItem('authToken',response.data?.token)
    return response;
  } catch (error) {
      return rejectWithValue( error.response?.data);
  }
})
const userRegister=createAsyncThunk("auth/register",async(data,{rejectWithValue})=>{
  try {
    const response= await registerForm(data);
    console.log(data)
    return response;
  } catch (error) {
      return rejectWithValue(error.response?.data);
  }
})
export {userLogin,userRegister}