import React from 'react'

const Button = ({name, renderContent}) => {
  return (
    <button 
    type="button"
    className="bg-white text-black font-semibold py-2 px-4 hover:cursor-pointer hover:text-xl transition-font-size duration-100 hover:bg-black hover:text-white outline-[1.5px] outline-gray-400"
    onClick={renderContent}
    >
      {name}
    </button>
  )
}

export default Button;