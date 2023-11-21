import React from 'react';
import './Forecasts.scss';
import { ForecastsData } from '../../utils/ForecastsData';
import { ForecastCard } from '../ForecastCard/ForecastCard';
import line from '../../images/line.svg';
import buttonArrow from '../../images/buttonArrow.svg';

export const Forecasts = () => {
  return (
    <div className="forecasts">
      <div className="forecasts__header">
        <div className="forecasts__title-block">
          <img src={line} alt="line" className="forecasts__image" />
          <h2 className="forecasts__title">Прогнозы на спорт</h2>
          <img src={line} alt="line" className="forecasts__image" />
        </div>
        <div className="forecasts__navigation">
          <p className="forecasts__text forecasts__text--is-open">Все</p>
          <p className="forecasts__text">Сегодня</p>
          <p className="forecasts__text">Завтра</p>
        </div>
      </div>
      <div className="forecasts__list">
        {ForecastsData.map(elem => (
          <ForecastCard key={elem.id} info={elem}/>
        ))}
      </div>
      <button className="forecasts__button">Больше прогнозов <img src={buttonArrow} alt="arrow" /></button>
    </div>
  );
};
