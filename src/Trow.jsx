import React from 'react'

const Trow = ({ item }) => {
  return (
    <tr>
      {Object.values(item).map((value, index) => (
        <td 
        key={index} 
        className="outline outline-yellow-500 px-4 py-2 text-center"
        >
            {JSON.stringify(value)}
        </td>
      ))}
    </tr>
  )
}

export default Trow