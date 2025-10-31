import React from 'react';
import Button from './Button.jsx';

const Header = ({renderContent, activeButton, setActiveButton }) => {
  return (
    <header className="grid grid-cols-3 grid-rows-[50px] w-full sticky top-0 z-50">
      <Button 
        name = {"users"}
        position = {0}
        renderContent={renderContent}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      <Button 
        name = {"posts"}
        position = {1}
        renderContent={renderContent}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      <Button 
        name = {"comments"}
        position = {2}
        renderContent={renderContent}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
    </header>
  )
}

export default Header