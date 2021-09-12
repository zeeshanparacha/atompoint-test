import React from 'react';
import styles from "./styles.module.css";

const TextUnderlineEffect = ({ title }) => {
  return (
    <span className={styles.bottomOutline}>
      {title}
    </span>
  )
}

export default TextUnderlineEffect;