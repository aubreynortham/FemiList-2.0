import React, { useState } from 'react';

import arrow from '../images/arrow-down.svg';
import star from '../images/star.svg';
import starFilled from '../images/star-filled.svg';

export default function Result({ movie }) {
  const [expanded, setExpanded] = useState(false);

  const formattedTitle = (entry) => {
    // HTML entities to plain text
    const txt = document.createElement('textarea');
    txt.innerHTML = entry;
    // updating title stricture
    if (txt.value.endsWith(', The')) {
      txt.value = `The ${txt.value.substring(0, txt.value.length - 5)}`;
    }
    return txt.value;
  };

  return (
    <article className='result'>
      <div className='result__header'>
        <img src={movie.poster} alt={`${movie.title} poster`} className={`result__image ${expanded ? ' expanded' : ''}`} />
        <div className={`result__header-bg${expanded ? ' expanded' : ''}`}></div>
        <h3 className='result__title'>{formattedTitle(movie.title)}</h3>
        <p className='result__rating'>Bechdel Rating<span className='srOnly'> {movie.rating} out of 3</span></p>
        <div className='result__stars'>
          <img
            src={movie.rating > 0 ? starFilled : star}
            alt={movie.rating > 0 ? 'filled star' : 'unfilled star'}
            className={`result__star${movie.rating > 0 ? '' : ' empty'}`}
          />
          <img
            src={movie.rating > 1 ? starFilled : star}
            alt={movie.rating > 1 ? 'filled star' : 'unfilled star'}
            className={`result__star${movie.rating > 1 ? '' : ' empty'}`}
          />
          <img
            src={movie.rating > 2 ? starFilled : star}
            alt={movie.rating > 2 ? 'filled star' : 'unfilled star'}
            className={`result__star${movie.rating > 2 ? '' : ' empty'}`}
          />
        </div>
        <button
          type='button'
          aria-expanded={expanded}
          aria-controls={expanded ? movie.id : null}
          onClick={() => setExpanded(!expanded)}
          className={`result__button${expanded ? ' expanded' : ''}`}>
          <img src={arrow} alt='expand movie content' />
        </button>
      </div>
      {expanded && (
        <div className='result__expanded' id={movie.id}>
          <p className='result__total-overview'>
            {movie.rating === 0 && (
              'This movie does not even have two named female characters.'
            )}
            {movie.rating === 1 && (
              'There are at least two named female characters but they do not share any dialogue with each other.'
            )}
            {movie.rating === 2 && (
              'There are at least two female characters who share dialogue with each other, but their only dialogue is about a man.'
            )}
            {movie.rating === 3 && (
              'This movie passes full Bechdel test criteria.'
            )}
          </p>
          <p className='result__stats'>
            {movie.year}
            &nbsp;&nbsp;|&nbsp;&nbsp;
            {movie.rated !== 'Not Rated' ? `Rated ${movie.rated}` : movie.rated}
            &nbsp;&nbsp;|&nbsp;&nbsp;
            IMDb {movie.imdbRating}/10</p>
          <p className='result__plot'>{movie.plot}</p>
          {movie.genre.split(', ').length > 0 && (
            <ul className='result__genre-tags'>
              {movie.genre.split(', ').map((genre, idx) => (
                <li key={idx} className='result__genre-tag'>{genre}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </article>
  );
}
