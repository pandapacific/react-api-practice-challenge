import React from 'react'

const Button = ({name}) => {
  return (
    <input 
        type="button" 
        value={name} 
        className='text-black'
    />
  )
}

export default Button;