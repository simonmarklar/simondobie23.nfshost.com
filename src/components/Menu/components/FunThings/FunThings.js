// @flow

import React from 'react';

import { Route } from 'react-router-dom'

import MenuItem from '../MenuItem';

import styles from './fun-things.css';

function FunThings() {
  const to = '/fun-things'
  return (
    <Route path={to} exact={true} children={({ match }) => match ? null : (
      <div className={styles.funThings}>
        <MenuItem to={to}>Things I've made for fun</MenuItem>
      </div>
    )} />
  )
}

export default FunThings;
