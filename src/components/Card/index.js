import React from 'react'
import TextEffect from "../TextUnderlineEffect";
import styles from "./styles.module.css";

const Card = ({ children, heading, textEffect }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h1> {heading} <TextEffect title={textEffect} /></h1>
      </div>
      {children}
    </div>
  )
}

export default Card;