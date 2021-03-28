import axios from 'axios';
import React, { useState } from 'react';
import blob from '../images/blob-1.svg';
import film from '../images/film.gif';
import Result from './Result';

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
    <form className='form' onSubmit={handleSubmit} id='search-films'>
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
        <button type='submit' className='button' disabled={!searchTerm || contentLoading}>Search</button>
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
      {contentLoading && (
        <div className='form__loader'>
          <img className='form__loader-icon' src={film} alt='film clipboard' />
          <p>Loading ...</p>
        </div>
      )}
      {movieData && movieData.length > 0 && (
        <>
          <h2>Showing{movieData.length > 9 && ' top'} {movieData.length} result{movieData.length > 1 && 's'} for {searchTerm}</h2>
          <div className='form__results'>
            {movieData.map((movie, idx) => (
              <Result key={idx} movie={movie} />
            ))}
          </div>
        </>
      )}
    </form>
  );
}
