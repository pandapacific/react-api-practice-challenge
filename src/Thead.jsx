import React from 'react';

const Thead = ({ heading }) => {
  return (
    <th className="outline outline-yellow-500 px-4 py-2 text-center sticky z-10 top-0 bg-black">{heading}</th>
  )
}

export default Thead