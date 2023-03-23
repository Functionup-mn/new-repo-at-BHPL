import { useContext } from "react"
import React  from 'react'
import { AppState } from "../App"


const ComC = () => {
    const AppData = useContext(AppState)
  return (
    <div className='compc'>
      <div>ComC</div>
      <h1>{AppData.data}</h1>
      <h1>{AppData.name.MyName}</h1>
      <h1>{AppData.name.age}</h1>
    </div>
  )
}

export default ComC
