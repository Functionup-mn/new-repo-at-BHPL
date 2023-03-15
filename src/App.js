import './App.css';
import Header from './Components/Header';
import movies from './movies.json';
import React, {useState} from 'react'

function App() {
  const [num, setNum] = useState(0)

  function inc(){
    setNum(num + 1)
  }

  function dec(){
    if(num<0){
      alert("The number is going on towards negative")
      setNum(num-1)
    }else{
    setNum(num-1)
  }
  }
  function res(){
    setNum(0)
  }

  return (
    <div className="App">
      <Header/>
     <div className="main">
      <h1 className="heading">{num}</h1>
      </div> 
      <div className='button'>
        <button className='btn' onClick={inc}>Increment</button>
        <button className='btn' onClick={dec}>Decrement</button>
        <button className='btn' onClick={res}>Reset </button>
      </div>
    </div>
  );
}

export default App;
