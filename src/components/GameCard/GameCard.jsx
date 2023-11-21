import React from 'react';
import cn from 'classnames';
import './GameCard.scss';
import forecastImage from '../../images/forecast.svg';

export const GameCard = ({ data }) => {

  const {
    teamTitle1,
    teamTitle2,
    teamPhoto1,
    teamPhoto2,
    time,
    forecast,
    live,
    additionalCount1,
    additionalCount2,
    count1,
    count2,
  } = data;

  return (
    <div className="game-card">
      <div className="game-card__teams">
        <p className="game-card__title game-card__title--title-1">{teamTitle1}</p>
        <img src={teamPhoto1} alt="team logo" className="game-card__image" />
        <div className="game-card__counts">
          {count1 !== null ? (
            <p className={cn('game-card__count', {'game-card__count--orange': live})}>{count1} : {count2}</p>
          ) : (
            <p className="game-card__count game-card__count--none">- : -</p>
          )}
          {additionalCount1 && <p className="game-card__additional-count">({additionalCount1}) : ({additionalCount2})</p>}
        </div>
        <img src={teamPhoto2} alt="team logo" className="game-card__image" />
        <p className="game-card__title game-card__title--title-2">{teamTitle2}</p>
        {live ? (
          <>
            <p className="game-card__time game-card__time--orange game-card__time--bold">live</p> 
            <p className="game-card__time game-card__time--orange game-card__time--small">{time}`</p> 
          </>
        ) : (
          <p className="game-card__time">{time}</p>
        )}

        {forecast && (
          <div className="game-card__forecast">
            <img className="game-card__forecast-image" src={forecastImage} alt="forecast" />
            <p className="game-card__forecast-text">Прогноз</p>
          </div>
        )}
      </div>
    </div>
  );
};
