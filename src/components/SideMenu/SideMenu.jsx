import React, { useEffect } from 'react';
import cn from 'classnames';
import { SideMenuNavigation } from '../SideMenuNavigation/SideMenuNavigation';
import './SideMenu.scss';
import logo from '../../images/HeaderLogo.svg';
import close from '../../images/close.svg';


export const SideMenu = ({isOpen, setIsOpen}) => {

  useEffect(() => {
    if(isOpen) {
      document.body.style.overflowY = 'hidden';

      return () => {
        document.body.style.overflowY = 'unset';
      };
    }
  }, [isOpen]);

  return (
    <>
      <div className={cn('side-menu', {'side-menu--is-close': !isOpen})}>
        <div className="side-menu__header">
          <img src={logo} alt="logo" className="side-menu__logo" />
          <img 
            onClick={() => (setIsOpen(false))} 
            src={close} alt="close button" 
            className="side-menu__close" 
          />
        </div>
        <SideMenuNavigation/>
        
      </div>
      <div onClick={() => (setIsOpen(false))} className={cn('side-menu__background', {'side-menu__background--is-close': !isOpen})}>
      </div>
    </>
  );
};
