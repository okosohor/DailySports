import React from 'react';
import './Navigation.scss';
import { navData } from '../../utils/HeaderData';

export const Navigation = () => {
  return (
    <ul className="navigation">
      {navData.map(elem => (
        <li key={elem.title} className="navigation__item">{elem.title}</li>
      ))}
    </ul>
  );
};
