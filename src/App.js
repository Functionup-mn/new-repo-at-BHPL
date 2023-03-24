import React, { useReducer } from 'react';
import './App.css';
import Header from './Component/Header';

const reducer = (state, action) =>{
  if(action.type === 'INC'){
    return state + 1
  }else if(action.type === 'DEC'){
    return state - 1 
  }else if(action.type === 'MUL'){
    return state * 2
  }else{
   return state
}
}


function App() {
  const [state, dispatch] = useReducer(reducer, 0)  // reducer just a name , 0 is initial state

  return (
    <div className='myApp'>
    <Header/>
    <h1>{state}</h1>
    <button onClick={() => dispatch({type: "INC"})}>Increment</button>
    <button onClick={() => dispatch({type: "DEC"})}>Decrement</button>
    <button onClick={() => dispatch({type: "MUL"})}>Multiply</button>
    </div>
  )
}

export default App;

