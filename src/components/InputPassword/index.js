import React, { useState } from 'react'
import styles from "./styles.module.css";
import Label from "../Label";
import { ReactComponent as ShowPassword } from "../../images/show-password.svg";
import { ReactComponent as HidePassword } from "../../images/hide-password.svg";

const InputPassword = ({ value, placeholder, onChange, icon, error }) => {
  const [showPassword, setToggle] = useState(false);

  const _handleChange = (event) => {
    onChange && onChange(event.target.value)
  }
  return (
    <>
      <div className={`${styles.input} ${error && styles.error}`} >
        <input className={styles.value}
          placeholder={placeholder}
          onChange={_handleChange}
          value={value}
          type={showPassword ? "text" : "password"}
        />
        {icon && <div className={styles.icon} onClick={() => setToggle(!showPassword)}>
          {showPassword ? <ShowPassword /> : <HidePassword />}
        </div>}
      </div>
      {error && <Label title={error} error />}
    </>
  )
};

InputPassword.defaultProps = {
  icon: false,
}

export default InputPassword;