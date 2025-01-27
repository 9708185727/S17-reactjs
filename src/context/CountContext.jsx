import { createContext, useReducer, useState } from "react";

const CountContext=createContext(
    
)
const ContextProvider=({children})=>{
 const [count,setCount]=useState(0)
    return <CountContext.Provider value={{count,setCount}}>{children}</CountContext.Provider>
}
export {CountContext,ContextProvider}
