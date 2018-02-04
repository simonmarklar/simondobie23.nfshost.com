import React from 'react';

import Menu from '../../components/Menu';

import styles from './fun-things.css';
import speedateImage from './speedate.jpg';

function FunThings() {
  return (
    <div>
      <h1>Things I've made for fun</h1>
      <p>Here is where I will be putting things i've made for fun. Which will most likely be javascript games.</p>

      <p>I dont get much time to code at home, so anything posted here will most likely be incomplete and made <strong>for science!</strong></p>

      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.hero}>
            <a href="https://github.com/simonmarklar/speedate" target="_blank" rel="noopener noreferrer">
              <h2>Speed Date</h2>
              <img src={speedateImage} alt="Speedate" />
            </a>
          </div>
          <div className={styles.info}>
            <p>Speedate is a Gamejam 2013 Entry and was written in under 48 hours by myself, with graphics by a 
            friend. It uses the <a href="http://underscorejs.org/" target="_blank" rel="noopener noreferrer">Underscore.js</a>, <a href="http://www.requirejs.org/" target="_blank" rel="noopener noreferrer">RequireJS</a> and <a href="http://www.jquery.com" target="_blank" rel="noopener noreferrer">jQuery</a> libraries
             and it uses the DOM rather than canvas for graphics.</p>
            <p>The theme for the Game Jam was "Heartbeat". We chose to make a dating card game, a cross between Poker and 
            Master mind. The objective of the game is to win as many hearts as possible, and if you play your cards right, 
            find a soulmate.</p>
            <p>You do this my listening to what the girl tells you, throwing cards that you think dont match onto the table 
            and keeping cards that do match. At the end of the round your cards are shown and if you are compatible, she will 
            give you her phone number or her heart.</p>
            <p>I am currently re-writing this in React</p>
          </div>
        </li>
      </ul>
      <Menu />
    </div>
  );
}

export default FunThings;
