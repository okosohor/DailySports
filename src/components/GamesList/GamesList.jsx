import React from 'react';
import './GamesList.scss';
import { GamesData } from '../../utils/GamesData.js';
import { GameCard } from '../GameCard/GameCard';

export const GamesList = () => {
  return (
    <div className="games-list">
      {GamesData.map(elem => (
        <GameCard key={elem.id} data={elem}/>
      ))}
    </div>
  );
};
