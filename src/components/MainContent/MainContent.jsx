import React from 'react';
import './MainContent.scss';
import { Games } from '../Games/Games';
import { Leagues } from '../Leagues/Leagues';

export const MainContent = () => {
  return (
    <div className="main-content">
      <Games />
      <Leagues />
    </div>
  );
};
