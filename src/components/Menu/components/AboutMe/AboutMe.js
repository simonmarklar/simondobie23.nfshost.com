// @flow

import React from 'react';

import { Route } from 'react-router-dom'

import MenuItem from '../MenuItem';

import styles from './about-me.css';

function Home() {
  const to = '/about-me'
  return (
    <Route path={to} exact={true} children={({ match }) => match ? null : (
      <div className={styles.aboutMe}>
        <MenuItem to={to}>About Me</MenuItem>
      </div>
    )} />
  )
}

export default Home;
