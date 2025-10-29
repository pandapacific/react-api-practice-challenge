import React from 'react';
import Button from './Button.jsx';

const Header = ({renderContent}) => {
  return (
    <header className="grid grid-cols-3 grid-rows-[50px] w-full">
        <Button 
            name = {"users"}
            renderContent={renderContent}
        />
        <Button 
            name = {"posts"}
            renderContent={renderContent}
        />
        <Button 
            name = {"comments"}
            renderContent={renderContent}
        />
    </header>
  )
}

export default Header