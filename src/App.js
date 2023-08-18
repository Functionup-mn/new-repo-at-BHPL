import React, { useEffect, useRef } from 'react';
import './App.css';
// import Header from './Component/Header';
// import { useState, createContext } from 'react';

function App() {
  let inputRef = useRef(null)
  function handleInput(){
    // console.log("handle input called");
    // inputRef.current.value = "1000"
    // inputRef.current.focus()
    inputRef.current.style.display = "none"         // Through this method you can control the input field
  }
     return (
      <div className='App'>
        <h1>useRef Hook In React</h1>
        <input type="text" ref = {inputRef}/>
        <button onClick={handleInput}>Handle Input</button>
      </div>
     )  
}














// const AppState = createContext();

// function App() {
//   const [input, setInput] = useState("");
//   // const counter = useRef(0);
//   // const prevState = useRef("")
//   const inputField = useRef()

// //   useEffect(() =>{
// //     // setCounter(counter )               // through this we stuck in infinite loop
// //     //  counter.current = counter.current + 1    // So, we use useRef to remove infinite rerender
// //     prevState.current = input  // to store previous state of input
// // }, [input])

//   const formHandler = (e) =>{
//     setInput(e.target.value)
//   }

//   const clickHandler = () =>{
//     // inputField.current.focus()
//     inputField.current.value = "Nadeem"  
//   }

//   return (
//     <div className='myApp'>
//     <Header/>
//     <input ref={inputField} type="text" value={input} onChange={formHandler} />
//     {/* <h4>Our prev state was {prevState.current}</h4> */}
//     <button onClick={clickHandler}>Click me</button>
//     </div>
//   )
// }

export default App;
// export {AppState}
