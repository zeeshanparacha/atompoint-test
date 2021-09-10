import React from 'react'
import styles from "./styles.module.css";

const Label = ({ color, marginTop, marginBottom, title, error }) => {
  return (
    <div
      style={{ color, marginTop, marginBottom }}
      className={`${styles.label} ${error && styles.error}`}>
      {title}
    </div>
  )
}

export default Label;