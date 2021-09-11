import React from "react";
import styles from "./styles.module.css";

const SimpleCard = ({ heading, value, danger }) => {
  return (
    <div className={styles.card}>
      <h1>{heading}</h1>
      <p style={{ color: danger && "#ef4646" }}>{value}</p>
    </div>
  );
}

export default SimpleCard;