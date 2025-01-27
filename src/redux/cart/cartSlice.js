import { createSlice } from "@reduxjs/toolkit";

const ProductCartSlice=createSlice({
    name:"cart",
    initialState:{
        product:[]  
    },
    reducers:{
        AddToCartProduct:(state,action)=>{
            const existingItem=state.product.find((cartItem)=>cartItem._id===action.payload._id)
            if(existingItem){
                existingItem.quantity+=1;
            }
            else{
            state.product.push({...action.payload,quantity:1})
            }
        },
        RemoveCartProduct:(state,action)=>{
            state.product=state.product.filter((cartitem)=>cartitem._id!=action.payload)
        }
    }
})
export const {AddToCartProduct,RemoveCartProduct}=ProductCartSlice.actions
export default ProductCartSlice.reducer;