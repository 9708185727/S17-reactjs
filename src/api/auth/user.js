import config from "../../config/config";
import axios from "axios";
const loginForm=async({email,password})=>{
    const response=await axios.post(`${config.BaseApiUrl}/api/auth/login`,{
        email,
        password
    })
    //console.log(response)
    return response;
  }
  const registerForm=async({name,address,phone,email,password,confirmPassword})=>{
    const response=await axios.post(`${config.BaseApiUrl}/api/auth/register`,{
        name,
        address,
        phone,
       
        email,
        password,
        confirmPassword
    })
    console.log(response)
    return response;
  }
  export {loginForm,registerForm}
