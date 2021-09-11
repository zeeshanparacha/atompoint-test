import React from 'react'
import styles from "./styles.module.css";

const Card = ({ children, heading }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h1>{heading}</h1>
      </div>
      {children}
    </div>
  )
}

export default Card;