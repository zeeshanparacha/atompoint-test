import React from "react";
import styles from "./styles.module.css";

const SimpleCard = ({ heading, value, error }) => {
  return (
    <div className={`${styles.card} ${error && styles.error}`}>
      <h1>{heading}</h1>
      <p style={{ color: error && "#ef4646" }}>{value}</p>
    </div>
  );
}

export default SimpleCard;