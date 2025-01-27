import React, { act, useReducer, useState } from 'react'

const CounterReducer = () => {
    const reducer=(state,action)=>{
            if(action.type==="increment"){
                return state+1;
            }
            if(action.type==="decrement"){
                return state-1;
            }

    }
  const  initialState={
      count:0,
    }
   
    const [count,dispatch]=useReducer(reducer,initialState)
    // console.log(useReducer(reducer,0))
  return (
    <>
      <div>
        <h1>count: {count}</h1>
<button onClick={()=>dispatch({type:"increment"})} className='bg-blue-400'>Increment</button>
<button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
      </div>
    </>
  )
}


export default CounterReducer
