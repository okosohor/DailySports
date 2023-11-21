import React from 'react';
import './ForecastCard.scss';
import vs from '../../images/vs4.png';

export const ForecastCard = ({info}) => {

  const {
    photo1,
    photo2,
    category,
    time,
    popular,
    description,
  } = info;

  return (
    <div className="forecast-card">
      <div className="forecast-card__background">
        <img src={photo1} alt="" className="forecast-card__image" />
        <img src={vs} alt="vs" className="forecast-card__vs-image"/>
        <img src={photo2} alt="" className="forecast-card__image" />
      </div>

      <div className="forecast-card__text">
        <p className="forecast-card__title forecast-card__title--bold-blue">{category}</p>
        <p className="forecast-card__title"><span className="forecast-card__title forecast-card__title--light-grey">&nbsp;/&nbsp;</span>{time}</p>
        <p className="forecast-card__description">{description}</p>
      </div>
      {popular && <div className="forecast-card__popular">популярный</div>}
    </div>
  );
};
