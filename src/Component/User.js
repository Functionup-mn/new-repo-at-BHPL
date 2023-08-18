import React, { forwardRef } from 'react'

const User = (props, myRef) => {
  return (
    <div>
      <input type="text" ref={myRef} />
    </div>
  )
}

export default forwardRef(User)
