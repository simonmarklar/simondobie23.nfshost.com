import React from 'react';
import { Link } from 'react-router-dom'

import styles from './menu-item.css';

type Props = {
  to: string,
  children: React.Node
}

function MenuItem (props: Props) {
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
