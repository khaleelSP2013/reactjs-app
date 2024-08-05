'use client'
import React, { useReducer } from 'react'

const ACTION ={
  INCREASE:"increase",
  DESCREASE:"descrese"
}
const initialState= { count:0 }
const reducer=(state:any,action:any)=>{
  switch(action.type){
    case ACTION.INCREASE:
      return {count: state.count + 1}
     case ACTION.DESCREASE:  
     return {count: state.count - 1}
     default :
     return state
  }
}
const SecondBlog = () => {
  const [state,dispatch]=useReducer(reducer,initialState)

  const handlerAdd=()=>{
    dispatch({type:ACTION.INCREASE});
  }

  const handlerSubtract=()=>{
    dispatch({type:ACTION.DESCREASE});
  }

  return (
    <div>
      <h1>Second Blog Post</h1>
      <h3>Count : {state.count}</h3>
      <button onClick={handlerAdd}>Increase</button><br/>
      <button onClick={handlerSubtract}>Descrese</button>
    </div>
  )
}

export default SecondBlog
