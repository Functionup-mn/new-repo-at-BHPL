import React, { useRef } from 'react';
import User from './Component/User';

function App(){
  
  let inputRef = useRef(null)
    function handleInput(){
      inputRef.current.value = "1000"
      inputRef.current.style.color = "yellow"                // foward ref hook is used to control the        
      inputRef.current.style.backgroundColor = 'black'   // input field which is present in the child component
    }
  return (
    <div className='App'>
      <h1>Learn About forwardRef in React</h1>                
      <User ref={inputRef}/>
      <button onClick={handleInput}>Handle Input</button>
    </div>
  )
}

export default App;