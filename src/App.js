import React, { useState } from 'react';
import './App.css'


function App(){
                                      // Controlled components: when input fields are controlled through the state in React then this components are called as controlled components.
  const [val, setVal] = useState('');
                                          
  function handleSubmit(e){
          setVal(e.preventDefault());
  }
  return (
    <div className='App'>
      <h1>Controled Component in React</h1> 
      <h2>Value: {val}</h2>               
      <input type="text" value={val} onChange={((e)=> setVal(e.target.value))} />
      <button type='submit' onClick={handleSubmit}> Submit  </button>
    </div>
  )
}

export default App;