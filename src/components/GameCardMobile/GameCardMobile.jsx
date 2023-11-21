import React from 'react';
import cn from 'classnames';
import './GameCardMobile.scss';
import forecastImage from '../../images/forecast.svg';

export const GameCardMobile = ({ data }) => {
  
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
    <div className="game-card-mobile">
      <div className="game-card-mobile__header">
        {live ?(
          <>
            <p className="game-card-mobile__time-live game-card-mobile__time-live--bold">live&nbsp;</p>
            <p className="game-card-mobile__time-live">{time}`</p>
          </>
        ) : (
          <p className="game-card-mobile__time">{time}</p>
        )}
        {forecast && (
          <div className="game-card-mobile__forecast">
            <img src={forecastImage} alt="forecast" className="game-card__forecast-image" />
            <p className="game-card-mobile__forecast-text">
              Прогноз
            </p>
          </div>
        )}
      </div>
      <div className="game-card-mobile__content">
        <div className="game-card-mobile__teams">
          <div className="game-card-mobile__team-description">
            <div className="game-card-mobile__team-info">
              <img src={teamPhoto1} alt="" className="game-card-mobile__team-image" />
              <p className="game-card-mobile__team-title">{teamTitle1}</p>
            </div>
            <div className="game-card-mobile__team-count-wrapper">
              {additionalCount1 &&  <p className="game-card-mobile__team-addititional-count">({additionalCount1})&nbsp;&nbsp;</p>}
              {count1 !== null ? (<p className={cn('game-card-mobile__team-count', {'game-card-mobile__team-count--orange' : live})}>{count1}</p>) : (
                <p className="game-card-mobile__team-count game-card-mobile__team-count--none">-</p>
              )}
            </div>
          </div>
          <div className="game-card-mobile__team-description">
            <div className="game-card-mobile__team-info">
              <img src={teamPhoto2} alt="" className="game-card-mobile__team-image" />
              <p className="game-card-mobile__team-title">{teamTitle2}</p>
            </div>
            <div className="game-card-mobile__team-count-wrapper">
              {additionalCount2 &&  <p className="game-card-mobile__team-addititional-count">({additionalCount2})&nbsp;&nbsp;</p>}
              {count2 !== null ? (<p className={cn('game-card-mobile__team-count', {'game-card-mobile__team-count--orange' : live})}>{count2}</p>) : (
                <p className="game-card-mobile__team-count game-card-mobile__team-count--none">-</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
