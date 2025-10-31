import React from 'react'

const Button = ({name, position, renderContent, activeButton, setActiveButton}) => {
  return (
    <button 
    type="button"
    className={(activeButton === name)? "bg-yellow-500 font-semibold py-2 px-4 hover:cursor-pointer text-xl transition-font-size duration-100 text-black outline-[1.5px] outline-gray-400" : "bg-black font-semibold py-2 px-4 hover:cursor-pointer hover:text-xl transition-font-size duration-100 text-yellow-500 outline-[1.5px] outline-gray-400"}
    onClick={() => {
      setActiveButton(name);
      renderContent(position);
      
    }}
    >
      {name}
    </button>
  )
}

export default Button;