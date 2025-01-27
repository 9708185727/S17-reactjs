import axios from "axios"

import config from "../../config/config";
const authToken=localStorage.getItem("authToken")
const getProducts = async ({
  limit = 10,
  sort = JSON.stringify({createdAt:-1}),
  filters = {},
}) => {
  const query = `limit=${limit}&sort=${sort}&filters=${JSON.stringify(filters)}`;

  const response = await axios.get(`${config.BaseApiUrl}/api/products?${query}`);
  return response;
};
const getProductById=async(id)=>{
  const response=await axios.get(`${config.BaseApiUrl}/api/products/${id}`)
  //  console.log(response)
  return response;
}
const getProductCategories=async()=>{
  const response=await axios.get(`${config.BaseApiUrl}/api/products/categories`)
  //  console.log(response)
  return response;
}
const addProduct=async(data)=>{
  const response=await axios.post(`${config.BaseApiUrl}/api/products`,data,{
    headers:{
      Authorization:`Bearer ${authToken}`
    }

  })
   console.log(response)
  return response;
}
const editProduct=async(id,data)=>{
  const response=await axios.put(`${config.BaseApiUrl}/api/products/${id}`,data,{
    headers:{
      Authorization:`Bearer ${authToken}`
    }

  })
   console.log(response)
  return response;
}
const deleteProduct=async(id)=>{
  const response=await axios.delete(`${config.BaseApiUrl}/api/products/${id}`,{
    headers:{
      Authorization:`Bearer ${authToken}`
    }

  })
   console.log(response)
  return response;
}
export {getProducts,getProductById,addProduct,editProduct,deleteProduct,getProductCategories}
//put=update