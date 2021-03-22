import axios from 'axios';
import React, { useState } from 'react';
import blob from '../images/blob-1.svg';

export default function Form() {
  const [searchTerm, setSearchTerm] = useState('');
  const [contentLoading, setContentLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [blankBechdelResults, setBlankBechdelResults] = useState(false);
  const [movieData, setMovieData] = useState([]);
  const results = [];

  // my CORS proxy reference: github.com/Rob--W/cors-anywhere/
  const customCorsProxy = 'https://serene-gorge-48466.herokuapp.com/';
  const customOMDBKey = '&apikey=567ccae1';
  const urlBechdel = `${customCorsProxy}http://bechdeltest.com/api/v1/getMoviesByTitle?title=${searchTerm.replace(/\s/, '+')}`;
  const urlOMDB = 'https://omdbapi.com?i=';

  const formattedTitle = (entry) => {
    // HTML entities to plain text
    const txt = document.createElement('textarea');
    txt.innerHTML = entry;
    // correct title stricture
    if (txt.value.endsWith(', The')) {
      txt.value = `The ${txt.value.substring(0, txt.value.length - 5)}`;
    }
    return txt.value;
  };

  // sort results by descending IMDB votes and display top 10
  const sortRelevance = (arr) => {
    const sorted = arr.sort((a, b) => (parseFloat(a.imdbVotes.replace(/,/g, '')) > parseFloat(b.imdbVotes.replace(/,/g, '')) ? -1 : 1));
    return sorted.slice(0, 10);
  };

  const queryFinalAPI = (dataRes, el) => {
    axios
      .get(`${urlOMDB}tt${el.imdbid}${customOMDBKey}`)
      .then((response) => {
        if (response.status === 200 && response.data.Poster) {
          el.poster = response.data.Poster;
          el.genre = response.data.Genre;
          el.imdbRating = response.data.imdbRating;
          el.rated = response.data.Rated;
          el.plot = response.data.Plot;
          el.imdbVotes = response.data.imdbVotes;
          results.push(el);
          if (results.length === dataRes.length) {
            setMovieData(sortRelevance(results));
            // setSearchTerm('');
            setContentLoading(false);
          }
        }
        return response.data;
      });
  };

  const queryAPIs = () => {
    setContentLoading(true);
    axios
      .get(urlBechdel)
      .then((response) => {
        if (response.status !== 200) {
          setBlankBechdelResults(true);
        }
        return response.data;
      })
      .then((data) => {
        if (data.length > 0) {
          data.map((el) => queryFinalAPI(data, el));
        } else {
          setErrorMessage('No movie found by that title.');
          setContentLoading(false);
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setBlankBechdelResults(false);
    setMovieData([]);
    queryAPIs();
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form__header'>
        <img className='form__header-blob' src={blob} alt='' />
        <h2 className='form__header-title'>Does your movie pass the <a href='#bechdel-test'>Bechdel Test</a>?</h2>
      </div>
      <div className='form__controls'>
        <input
          type='text'
          aria-label='Search for a movie'
          placeholder='Search for a movie'
          className='form__input'
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <button type='submit' className='form__button' disabled={!searchTerm}>Search</button>
      </div>
      {errorMessage}
      {blankBechdelResults && (
        <>
          <p>No results:</p>
          <p>
            This site pulls in movie data from the Bechdel Test API. If you think a movie should
            be rated that is not yet in the database, contribute to the API{' '}
            <a id="hereLink" href="http://bechdeltest.com/add/">here</a>
            .
          </p>
        </>
      )}
      {contentLoading && 'LOADING!'}
      {movieData && movieData.length > 0 && (
        <>
          <h2>Showing {movieData.length} result{movieData.length > 1 && 's'} for {searchTerm}</h2>
          {movieData.map((movie, idx) => (
            <article key={idx}>
              <img src={movie.poster} alt={`${movie.title} poster`} />
              <h3>{formattedTitle(movie.title)}</h3>
              <p>Genre: {movie.genre}</p>
              <p>Release Date: {movie.year}</p>
              <p>Parental Rating: {movie.rated}</p>
              <p>IMDB Rating: {movie.imdbRating} / 10</p>
              <p>Plot: {movie.plot}</p>
              <p>Bechdel Score: {movie.rating} / 3</p>
              {movie.rating === 0 && (
                <p>This movie does not even have two female characters.</p>
              )}
              {movie.rating === 1 && (
                <p>
                  There are at least two female characters but they do not share any dialogue with
                  each other.
                </p>
              )}
              {movie.rating === 2 && (
                <p>There are at least two female characters who share dialogue with each other, but
                their only dialogue is about a man.</p>
              )}
              {movie.rating === 3 && (
                <p>This movie passes all test criteria</p>
              )}
            </article>
          ))}
        </>
      )}
    </form>
  );
}
