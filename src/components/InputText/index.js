import React from 'react'
import Label from "../Label";
import styles from "./styles.module.css";

const InputText = ({ value, placeholder, onChange, error }) => {
  return (
    <>
      <div className={`${styles.input} ${error && styles.error}`}>
        <input
          className={styles.value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          type='text'
        />
      </div>
      {error && <Label title={error} error />}
    </>
  )
};

InputText.defaultProps = {
  type: "text",
  placeholder: "Search..."
}

export default InputText;