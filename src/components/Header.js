import React from 'react';
import logo from '../images/logo.png';
import rosieBg from '../images/rosie.jpg';

export default function Header() {
  return (
    <div className='header'>
      <img className='header__image' src={rosieBg} alt='Rosie the Riveter clutches a pair of movie tickets' />
      <div className='header__content'>
        <img className='header__logo' src={logo} alt='The FemiList' />
        <div>
          <h1 className='header__title'>
            Movie ratings for feminists.*
          </h1>
          <p className='header__disclaimer'>
            <span className='highlight'>
              *And for the rest of the population, because the media&#39;s representation of women
              matters.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
