import React from 'react'
import styles from "./styles.module.css";

const Button = ({ color, background, title, borderRadius, height, onClick, fontWeight }) => {
  return (
    <div
      onClick={onClick}
      style={{ color, background, borderRadius, height, fontWeight }}
      className={styles.button}>
      {title}
    </div>
  )
}

Button.defaultProps = {
  color: '#262626',
  background: '#FFFFFF',
  borderRadius: '6px',
  title: 'Click me',
};

export default Button;