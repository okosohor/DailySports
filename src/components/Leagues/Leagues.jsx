import React from 'react';
import './Leagues.scss';
import line from '../../images/line.svg';
import { LeaguesData } from '../../utils/LeaguesData';

export const Leagues = () => {
  return (
    <div className="leagues">
      <div className="leagues__title-block">
        <img src={line} alt="line" className="leagues__image" />
        <h2 className="leagues__title">Топ лиги</h2>
        <img src={line} alt="line" className="leagues__image" />
      </div>
      <div className="leagues__list">
        {LeaguesData.map(elem => (
          <div key={elem.id} className="leagues__item">
            <img src={elem.img} alt="league logo" className="leagues__image" />
            <p className="leagues__text">{elem.title}</p>
          </div>
        ))}
        <button className="leagues__button">Все лиги</button>
      </div>
    </div>
  );
};
