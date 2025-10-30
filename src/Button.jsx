import React from 'react'

const Button = ({name, position, renderContent}) => {
  return (
    <button 
    type="button"
    className="bg-black font-semibold py-2 px-4 hover:cursor-pointer hover:text-xl transition-font-size duration-100 text-yellow-500 outline-[1.5px] outline-gray-400"
    onClick={() => renderContent(position)}
    >
      {name}
    </button>
  )
}

export default Button;