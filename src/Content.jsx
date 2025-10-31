import React from 'react';
import Item from './Item.jsx';
import Thead from './Thead.jsx';
import Trow from './Trow.jsx';

const Content = ({items, error, loading}) => {
  return (
    <main className="text-yellow-500 bg-black overflow-scroll w-full min-h-full grow">
      <div className="grid grid-cols-1 min-h-full">
        {loading && <p className="p-6 place-self-center">Loading content...</p>}
        {error && !loading && <p className="p-6 place-self-center">Error loading data. Please try again.</p>}
        {!items && !error && !loading && <p className="p-6 place-self-center">Click a button to display content.</p>}
        {items && !error && !loading && 
          <table className="min-w-max h-fit border-collapse table-auto overflow-scroll">
            {/* Table Headings */}
            <thead>
              <tr>
                {Object.keys(items[0]).map((heading, index) => (
                  <Thead 
                    key={index}
                    heading={heading}
                  />
                ))}
              </tr>
            </thead>
            {/* Table Items */}
            <tbody>
              {items.map((item, index) => (
                <Trow
                  key={index}
                  item={item}
                />
              ))}
            </tbody>
          </table>
        } 
      </div>
    </main>
  )
}
 
export default Content;