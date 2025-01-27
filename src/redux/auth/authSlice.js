//
import { createSlice} from '@reduxjs/toolkit';
import { userLogin, userRegister } from './authActions';
import { act } from 'react';
const authSlice=createSlice({
        name:"auth",
        initialState:{
            user:null, 
            loading:false,
            error:null, 
        },
        reducers:{
            userLogout(state){
                
               state.user=null;
               localStorage.removeItem("authToken")
            }
        },
        extraReducers:(builder)=>{
            builder.addCase(userLogin.pending,(state)=>{
                state.loading=true;
                state.error=null;
            }).addCase(userLogin.fulfilled,(state,action)=>{
                state.user=action.payload;
                state.loading=false;
            }).addCase(userLogin.rejected,(state,action)=>{
                state.error=action.payload;
                state.loading=false;
            }).addCase(userRegister.pending,(state)=>{
                state.loading=true;
                state.error=null;
            }).addCase(userRegister.fulfilled,(state,action)=>{
                state.user=action.payload;
                state.loading=false;
            }).addCase(userRegister.rejected,(state,action)=>{
                state.error=action.payload;
                state.loading=false;
            })
        }

})

export const {userLogout}=authSlice.actions;
export default authSlice.reducer;