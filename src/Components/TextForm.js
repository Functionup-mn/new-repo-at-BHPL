import React, {useState} from 'react'

export default function TextForm(props){

    function changeUpperCase(){
        let newText = text.toUpperCase()
        setText(newText)
    }

    function changeLowerCase(){
        let newText = text.toLocaleLowerCase()
        setText(newText)
    }

    function handleOnChange(event){
        setText(event.target.value)
    }

    const [text, setText] = useState('Please enter text here')
    return (
    <div>
         <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={changeUpperCase}>Convert into Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={changeLowerCase}>Convert to Lowercase</button>
         </div>  
         <div className="container">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            </div>   
    </div>
    )
}