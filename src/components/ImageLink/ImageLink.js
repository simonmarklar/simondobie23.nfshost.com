// @flow
import React from 'react';
import {Link} from 'react-router-dom';

import styles from './imageLink.css';

type Props = {
  to: string,
  children: string,
  backgroundClass?: string
}

function ImageLink (props: Props) {
  const {
    to,
    backgroundClass,
    children: text
  } = props
  
  return (
    <Link to={to}>
      <div className={backgroundClass}>
        <h3 className={styles.title}>
          <span className={styles.titleText}>{text}</span>
        </h3>
      </div>
    </Link>
  )
}

export default ImageLink;
