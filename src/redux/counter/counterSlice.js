//
import { createSlice} from '@reduxjs/toolkit';
const counterSlice=createSlice({
        name:"counter",
        initialState:{
            count:0,  
        },
        reducers:{
            incrementCount(state){
                state.count=state.count+1;
            },
            decrementCount(state){
                state.count=state.count-1;
            },
            inputCount(state,action){
                state.count=action.payload;
            }


        }
})
export const {incrementCount,decrementCount,inputCount}=counterSlice.actions;
export default counterSlice.reducer;