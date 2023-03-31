
import { useMemo, useState } from 'react';
import './App.css';
import Header from './Component/Header';


function App() {
    const [count, setCount] = useState(0)    
    const [name, setName] = useState('')

  const expenciveCalculation = (num) =>{ 
    console.log('calculating');   
    for(let i=0; i<10000000; i++){}             // This will make slower because component rerender ho
    return num;                                 // raha h isiliye useMemo Hook use krte h 
  }
   const calculation = useMemo(() =>
    expenciveCalculation(count)                 // Jisme dependency denge only usme rerender hoga
   ,[count]);

  return (
    <div className='myApp'>
    <Header/>
    <button onClick={() => setCount(count+1)}>Increment</button>
    <h1>Count:{count}</h1>
    <input onChange={(e) => setName(e.target.value)} />
    <h1>Name:{name}</h1>
    </div>
  )
}

export default App;

