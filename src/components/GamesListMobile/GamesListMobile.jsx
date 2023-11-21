import React from 'react';
import './GamesListMobile.scss';
import { GamesData } from '../../utils/GamesData';
import { GameCardMobile } from '../GameCardMobile/GameCardMobile';
import arrow from '../../images/buttonArrow.svg';

export const GamesListMobile = () => {
  return (
    <div className="games-list-mobile">
      {GamesData.map(elem => (
        <GameCardMobile key={elem.id} data={elem}/>
      ))}
      <button className="games-list-mobile__button">Все матчи <img src={arrow} alt="arrow" /></button>
    </div>
  );
};
