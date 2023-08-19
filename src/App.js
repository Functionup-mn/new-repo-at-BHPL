import React, { useRef } from 'react';
import './App.css'


function App(){
                                      // UnControlled components: when input fields are not controlled through the state in React then this components are called as uncontrolled components. this is controlled through javascript or Ref.
     let inputRef = useRef(null)
     let inputRef2 = useRef(null)

   function submitForm(e){
        e.preventDefault()
        console.log("Input field 1:", inputRef.current.value);
        console.log("input field 2:", inputRef2.current.value);
        let Input3 = document.getElementById("input3").value;
        console.log("Input field 3:", Input3);
   }

  return (
    <div className='App'>
      <h1>  UnControled Component in React</h1> 
      <form onSubmit={submitForm}>
        <input ref={inputRef} type="text" />
        <br />
        <br />
        <input ref={inputRef2} type="text" />
        <br />
        <br />
        <input id='input3' type="text" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App;