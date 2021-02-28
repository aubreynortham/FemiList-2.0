import axios from 'axios';
import React, { useState } from 'react';

export default function Form() {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [blankBechdelResults, setBlankBechdelResults] = useState(false);

  // my CORS proxy reference: github.com/Rob--W/cors-anywhere/
  const customCorsProxy = 'https://serene-gorge-48466.herokuapp.com/';
  const customOMDBKey = '&apikey=567ccae1';
  const urlBechdel = `${customCorsProxy}http://bechdeltest.com/api/v1/getMoviesByTitle?title=${searchTerm.replace(/\s/, '+')}`;
  const urlOMDB = 'https://omdbapi.com?i=';

  const queryApiOMDB = (id) => {
    axios
      .get(`${urlOMDB}tt${id}${customOMDBKey}`)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          return response.data;
        }
        return response;
      });
  };

  const queryApiBechdel = () => {
    axios
      .get(urlBechdel)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
        } else {
          setBlankBechdelResults(true);
        }
        return response.data;
      })
      .then((data) => {
        if (data.length > 0) {
          data.map((mov) => {
            console.log(mov);
            queryApiOMDB(mov.imdbid);
            return mov;
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
    queryApiBechdel();
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
          <p>This site pulls in movie data from the Bechdel Test API. If you think a movie should be rated that is not yet in the database, contribute to the API <a id="hereLink" href="http://bechdeltest.com/add/">here</a>.</p>
        </>
      )}
    </form>
  );
}
