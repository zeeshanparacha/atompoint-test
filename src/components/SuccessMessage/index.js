import React from 'react'
import styles from "./styles.module.css";
import sucessIcon from '../../images/sucess-icon.svg'

const SuccessMessage = ({ heading, text }) => {
  return (
    <div className={styles.section}>
      <img src={sucessIcon} alt="sucess-icon" />
      <h1 className={styles.heading}>{heading}</h1>
      <p className={styles.para}>{text}</p>
    </div>
  )
}
export default SuccessMessage;