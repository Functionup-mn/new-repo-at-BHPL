import React, { useEffect, useRef } from 'react';
import './App.css';
import Header from './Component/Header';
import { useState, createContext } from 'react';

const AppState = createContext();

function App() {
  const [input, setInput] = useState("");
  // const counter = useRef(0);
  // const prevState = useRef("")
  const inputField = useRef()

//   useEffect(() =>{
//     // setCounter(counter )               // through this we stuck in infinite loop
//     //  counter.current = counter.current + 1    // So, we use useRef to remove infinite rerender
//     prevState.current = input  // to store previous state of input
// }, [input])

  const formHandler = (e) =>{
    setInput(e.target.value)
  }

  const clickHandler = () =>{
    // inputField.current.focus()
    inputField.current.value = "Nadeem"  
  }

  return (
    <div className='myApp'>
    <Header/>
    <input ref={inputField} type="text" value={input} onChange={formHandler} />
    {/* <h4>Our prev state was {prevState.current}</h4> */}
    <button onClick={clickHandler}>Click me</button>
    </div>
  )
}

export default App;
export {AppState}
