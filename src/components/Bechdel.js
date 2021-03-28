import React from 'react';
import blob from '../images/blob-2.svg';
import gif1 from '../images/characters.gif';
import gif2 from '../images/friends.gif';
import gif3 from '../images/convos.gif';

export default function Bechdel() {
  return (
    <section className='bechdel'>
      <div className='bechdel__header'>
        <img className='bechdel__header-blob' src={blob} alt='' />
        <h2 className='bechdel__header-title' id='bechdel-test'>What is the <br />Bechdel Test?</h2>
      </div>
      <ul className='bechdel__list'>
        <li className='bechdel__list-item'>
          <img className='bechdel__gif' src={gif1} alt='illustrated network of female characters' />
          <div className='bechdel__list-item-content'>
            <div className='bechdel__list-counter'>1</div>
            <p>There must be at least two named female characters in the film</p>
          </div>
        </li>
        <li className='bechdel__list-item reverse'>
          <img className='bechdel__gif' src={gif2} alt='illustrated conversation between two women' />
          <div className='bechdel__list-item-content'>
            <div className='bechdel__list-counter'>2</div>
            <p>The two(+) female characters have dialog with each other</p>
          </div>
        </li>
        <li className='bechdel__list-item'>
          <img className='bechdel__gif' src={gif3} alt='illustrated character conversations' />
          <div className='bechdel__list-item-content'>
            <div className='bechdel__list-counter'>3</div>
            <p>Their conversation is about something other than a man</p>
          </div>
        </li>
        <li className='bechdel__recap'>
          Seems like a low bar, but according to the Bechdel Test API&#39;s results, nearly half
          of all movies could not pass the test.
        </li>
        <li className='bechdel__recap'>
          It&#39;s a simple checklist developed by cartoonist <span className='highlight'>&nbsp;Alison Bechdel&nbsp;</span> used to highlight
          gender disparity in film and other media. The test is a great tool to measure not just
          the number of female characters on the screen, but to illustrate how often popular media
          fail to include any female character development or female-driven narratives. The
          practice points to a problematic gender norm that women are only defined by their
          relationship to men, and inherently lack their own value.
        </li>
        <li className='bechdel__recap'>
          To echo a commonly quoted sentiment ... <br />Here&#39;s to strong multidimensional women
          &mdash; may we know them, may we be them, may we amplify them with consumer dollars and
          viewership power.*
          <br/>
          <p className='bechdel__disclaimer'>*creative liberties were taken</p>
        </li>
      </ul>
      <div className='bechdel__button-wrapper'>
        <a className='button' href='#search-films'>
          Back to Search
        </a>
      </div>
    </section>
  );
}
