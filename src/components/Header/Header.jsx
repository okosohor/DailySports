import React, { useState } from 'react';
import './Header.scss';
import { Navigation } from '../Navigation/Navigation.jsx';
import { SideMenu } from '../SideMenu/SideMenu.jsx';
import menuButton from '../../images/HeaderMenuButton.svg';
import logo from '../../images/HeaderLogo.svg';
import langImg from '../../images/LanguageEarth.svg';

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
 
  return (
    <header className="header">
      <SideMenu isOpen={menuIsOpen} setIsOpen={setMenuIsOpen}/>
      <div className="header__container">
        <img 
          src={menuButton} 
          alt="menu button" 
          className="header__menu-button"
          onClick={() => (setMenuIsOpen(true))}
        />
        <img src={logo} alt="logo" className="header__logo" />
        <div className="header__navigation">
          <Navigation /> 
        </div>
        <div className="header__language">
          <img src={langImg} alt="" className="header__language-image" />
          <p className="header__language-text">Рус</p>
        </div>
      </div>
    </header>
  );
};


