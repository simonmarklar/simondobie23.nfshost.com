// @flow

import React from 'react';

import { Route } from 'react-router-dom'

import MenuItem from '../MenuItem';

import styles from './things-learned.css';

function ThingsLearned() {
  const to = '/things-ive-learned'
  return (
    <Route path={to} exact={true} children={({ match }) => match ? null : (
      <div className={styles.thingsLearned}>
        <MenuItem to={to}>Things I've learned</MenuItem>
      </div>
    )} />
  )
}

export default ThingsLearned;
