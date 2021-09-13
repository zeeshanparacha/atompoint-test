import React from 'react'
import ErrIcon from "../../images/error.png";
import styles from "./styles.module.css";

const Error = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={ErrIcon} />
      </div>
      <h1>No results found</h1>
      <p>Try loggin with different account</p>
    </div>
  )
}
export default Error;