// @flow
import React from 'react';

import styles from './menu.css';

import Home from './components/Home';
import AboutMe from './components/AboutMe';
import ThingsLearned from './components/ThingsLearned';
import FunThings from './components/FunThings';

function Menu () {
  return (
    <div className={styles.menu}>
      <Home />
      <AboutMe />
      <ThingsLearned />
      <FunThings />
    </div>
  )
}

export default Menu
