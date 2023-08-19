import React, { useState } from 'react';
import './App.css'


function App(){            
                            // Higher-order components or HOC is the advanced method of reusing the component functionality logic. It simply takes the original component and returns the enhanced component.
 
  return (
    <div className='App'>
      <h1>  High Order Component in React</h1> 
        <HOCRed cmp={Counter}/>
        <HOCGreen cmp={Counter}/>
        <HOCYellow cmp={Counter}/>
    </div>
  )
}

function HOCRed(props){
  
  return <h2 style={{backgroundColor: 'red', width:'300px'}}>Red<props.cmp/></h2>
}

function HOCGreen(props){
  
  return <h2 style={{backgroundColor: 'green', width:'300px'}}>Green<props.cmp/></h2>
}
function HOCYellow(props){
  
  return <h2 style={{backgroundColor: 'yellow', width:'300px'}}>Yellow<props.cmp/></h2>
}

function Counter(){
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={(()=> setCount(count+1))}>Update Count</button>
    </div>
  )
}

export default App; 