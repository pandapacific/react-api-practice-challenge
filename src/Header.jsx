import React from 'react';
import Button from './Button.jsx';

const Header = () => {
  return (
    <header className="grid grid-cols-3 w-full">
        <Button 
            name = {"users"}
        />
        <Button 
            name = {"posts"}
        />
        <Button 
            name = {"comments"}
        />
    </header>
  )
}

export default Header