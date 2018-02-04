import React from 'react';
import { Link } from 'react-router-dom'

import styles from './menu-item.css';

function MenuItem (props) {
  const {
    to,
    children: text
  } = props;
  
  return (
    <div className={styles.box}>
      <Link to={to}>
        <h3 className={styles.title}>
          <span className={styles.titleText}>{text}</span>
        </h3>
      </Link>
    </div>
  );
}

export default MenuItem;
