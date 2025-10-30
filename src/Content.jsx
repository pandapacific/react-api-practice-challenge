import React from 'react';
import Item from './Item.jsx';

const Content = ({items, error, loading}) => {
  return (
    <main className="text-yellow-500 bg-black w-full min-h-screen grid grid-cols-1">
      {loading && <p className="p-6 place-self-center">Loading content...</p>}
      {error && !loading && <p className="p-6 place-self-center">Error loading data. Please try again.</p>}
      {!items && !error && !loading && <p className="p-6 place-self-center">Click a button to display content.</p>}
      {items && !error && !loading && <ul className="list-disc p-6 space-y-4">
       {items && items.map((item) => (
          <Item 
            key={item.id} 
            item={item} 
          />
        ))} 
      </ul>} 

    </main>
  )
}

export default Content