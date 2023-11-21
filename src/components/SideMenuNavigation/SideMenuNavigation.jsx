import React from 'react';
import './SideMenuNavigation.scss';
import { navData } from '../../utils/HeaderData.js';
import arrow from '../../images/grayArrow.svg';

export const SideMenuNavigation = () => {
  return (
    <ul className="side-menu-navigation">
      <li className="side-menu-navigation__item">
        <p className="element-menu-navigation__text">Главная</p>
      </li>
      {navData.map(element => (
        <li key={element.title} className="side-menu-navigation__item">
          <p className="element-menu-navigation__text">{element.title}</p>
          {element.arrow && <img src={arrow} alt="arrow" className="element-menu-navigation__image" />}
        </li>
      ))}
    </ul>
  );
};
