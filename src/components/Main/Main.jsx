import React from 'react';
import './Main.scss';
import { Forecasts } from '../Forecasts/Forecasts';
import { MainContent } from '../MainContent/MainContent';


export const Main = () => {
  return (
    <main className="main">
      <div className="main__container">
        <Forecasts/>
        <MainContent />
      </div>
    </main>
  );
};
