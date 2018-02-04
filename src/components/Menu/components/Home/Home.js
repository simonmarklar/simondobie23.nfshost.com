// @flow

import React from 'react';

import { Route } from 'react-router-dom'

import MenuItem from '../MenuItem';

import styles from './home.css';

function Home() {
  const to = '/'
  return (
    <Route path={to} exact={true} children={({ match }) => match ? null : (
      <div className={styles.home}>
        <MenuItem to={to}>Home</MenuItem>
      </div>
    )} />
  )
}

export default Home;
