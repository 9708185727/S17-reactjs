import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories, getAllProducts } from "./productActions";
const initailQueryState={
    filters:{
      name:"",
      category:""
    },
    sort:JSON.stringify({createdAt:-1}),
    limit:10
  }
const productSlice=createSlice({
    name:"products",
    initialState:{
        loading:false,
        error:null,
        products:[],
        categories:[],
        query:initailQueryState
    },
    reducers:{
        setLimit:(state,action)=>{
            state.query.limit=action.payload;
        },
        setSort:(state,action)=>{
            state.query.sort=action.payload;
        },
        setFilters: (state, action) => {
            state.query.filters = {...state.query.filters,...action.payload};
          },
          resetFilter:(state)=>{
            state.query=initailQueryState
          }
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllProducts.pending,(state)=>{
            state.loading=true;
            state.error=null;
        }).addCase(getAllProducts.fulfilled,(state,action)=>{
            state.products=action.payload;
            state.loading=false;
        }).addCase(getAllProducts.rejected,(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        }).addCase(getAllCategories.pending,(state)=>{
            state.loading=true;
            state.error=null;
        }).addCase(getAllCategories.fulfilled,(state,action)=>{
            state.categories=action.payload;
            state.loading=false;
        }).addCase(getAllCategories.rejected,(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        })
    }
})
export const {setLimit,setSort,setFilters,resetFilter}=productSlice.actions
export default productSlice.reducer;