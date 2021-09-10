import React, { useState, useEffect } from 'react'
import InputText from '../../components/InputText';
import Header from "../../components/Header";
import Button from "../../components/Buttons";
import Label from "../../components/Label";
import { sendResetEmail } from "../../store/effects/auth";
import { useDispatch, useSelector } from 'react-redux';
import { notification } from "../../components/Notification";
import { validateEmail } from "../../utils/regexs";
import styles from "./styles.module.css";

const ForgotPassword = () => {
  const dispatch = useDispatch()
  const success = useSelector(state => state.auth.success);
  const error = useSelector(state => state.auth.error);

  const [validations, setValidations] = useState({})
  const [email, setEmail] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)

  const _handleChange = value => {
    setEmail(value);
    setValidations({ email: false })
  }

  const _handleClick = () => {
    let validated = true;
    if (!email) {
      setValidations(state => ({ ...state, email: "Email is required" }))
      validated = false;
    }
    if (email && !validateEmail(email)) {
      setValidations(state => ({ ...state, email: "Wrong email address" }))
      validated = false;
    }
    if (validated && !validations['email']) {
      dispatch(sendResetEmail(email))
    }
  }

  useEffect(() => {
    if (error) notification("error", error)
    if (success) { notification("success", success); setIsSuccess(true) }
    // eslint-disable-next-line
  }, [error, success])

  return (
    <div className={styles.section}>
      <Header heading={"Reset Password"} />
      <div className={styles.form}>
        <div className={styles.feilds}>
          <Label title="Email Address" error={Boolean(validations['email'])} />
          <InputText
            placeholder="Enter your email"
            type="email"
            value={email || ""}
            error={(validations['email'] && !email && validations['email']) ||
              (validations['email'] && email && validations['email'])}
            onChange={_handleChange}
          />
        </div>
        <div className={`${styles.feilds} ${isSuccess && styles.disable}`}>
          <Button onClick={() => _handleClick()}
            fontWeight="600"
            borderRadius="3px"
            background="#FFB121"
            title={`${setIsSuccess ? 'Instructions Sent' : 'Send Instructions'}`} />
        </div>
        {isSuccess && <p onClick={() => _handleClick()} className={styles.resendEmail}>Resend Instructions</p>}
      </div>
    </div>
  )
}
export default ForgotPassword;