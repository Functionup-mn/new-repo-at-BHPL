import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    // To go back to main route/component
    const navigate = useNavigate()

  return (
    <div>
      <h3>404 Page not found</h3>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Error
