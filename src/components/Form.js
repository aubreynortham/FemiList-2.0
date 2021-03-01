import axios from 'axios';
import React, { useState } from 'react';

export default function Form() {
  const [searchTerm, setSearchTerm] = useState('');
  const [responseFinished, setResponseFinished] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [blankBechdelResults, setBlankBechdelResults] = useState(false);
  const [movieData, setMovieData] = useState([]);

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

  const queryAPIs = () => {
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
          data.map((el, idx) => {
            axios
              .get(`${urlOMDB}tt${el.imdbid}${customOMDBKey}`)
              .then((response) => response.data)
              // add relevant OMDB data to complement our Bechdel API response
              .then((otherData) => {
                el.Poster = otherData.Poster;
                el.Genre = otherData.Genre;
                el.imdbRating = otherData.imdbRating;
                el.Rated = otherData.Rated;
                el.Plot = otherData.Plot;
                if (idx >= data.length - 1) {
                  setSearchTerm('');
                  setMovieData(data);
                  setResponseFinished(true);
                }
              });
            return data;
          });
        } else {
          setErrorMessage('No movie found by that title.');
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
    <form onSubmit={handleSubmit}>
      <h2>Does your movie pass the <a href='#bechdel-test'>Bechdel Test</a>?</h2>
      <input
        type='text'
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        placeholder='Search for a movie'
      />
      <button type='submit'>Search</button>
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
      {responseFinished && movieData.length > 0 && movieData.map((movie, idx) => (
        <article key={idx}>
          {movie.Poster === 'N/A' ? (
            <img src='http://i.imgur.com/ddETfiC.jpg' alt='Poster not available' />
          ) : (
            <img src={movie.Poster} alt={`${movie.title} poster`} />
          )}
          <h3>{formattedTitle(movie.title)}</h3>
          <p>Genre: {movie.Genre}</p>
          <p>Release Date: {movie.year}</p>
          <p>Parental Rating: {movie.Rated}</p>
          <p>IMDB Rating: {movie.imdbRating} / 10</p>
          <p>Plot: {movie.Plot}</p>
          <p>Bechdel Score: {movie.rating} / 3</p>
          {movie.rating === 0 && (
            <p>This movie does not even have two female characters.</p>
          )}
          {movie.rating === 1 && (
            <p>There are at least two female characters but they do not share any dialogue with each
            other.</p>
          )}
          {movie.rating === 2 && (
            <p>There are at least two female characters who share dialogue with each other at some
            point in the film, but their only dialogue is about a man.</p>
          )}
          {movie.rating === 3 && (
            <p>This movie passes all test criteria</p>
          )}
        </article>
      ))}
    </form>
  );
}
