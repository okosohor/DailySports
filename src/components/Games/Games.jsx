import React from 'react';
import './Games.scss';
import { GamesListMobile } from '../GamesListMobile/GamesListMobile';
import { GamesList } from '../GamesList/GamesList';
import line from '../../images/line.svg';
import calendar from '../../images/calendar.svg';

export const Games = () => {
  return (
    <div className="games">
      <div className="games__header">
        <div className="games__title-block">
          <img src={line} alt="line" className="games__image" />
          <h2 className="forecasts__title">Матч центр</h2>
          <img src={line} alt="line" className="games__image" />
        </div>
        <div className="games__navigation">
          <div className="games__calendar">
            <img src={calendar} alt="calendar" className="games__calendar-image" />
            <p className="games__calendar-text">Календарь</p>
          </div>
          <div className="games__navigation-list">
            <p className="games__navigation-text">Live</p>
            <p className="games__navigation-text games__navigation-text--is-open">05.06</p>
            <p className="games__navigation-text">Вчера</p>
            <p className="games__navigation-text">Сегодня</p>
            <p className="games__navigation-text">Завтра</p>
            <p className="games__navigation-text">09.06</p>
          </div>
          
        </div>
      </div>
      <GamesListMobile/>
      <GamesList/>
    </div>
  );
};
