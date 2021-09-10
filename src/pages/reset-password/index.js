import React, { useState, useEffect } from 'react'
import InputPassword from '../../components/InputPassword';
import Header from "../../components/Header";
import Button from "../../components/Buttons";
import Label from "../../components/Label";
import SuccessMessage from "../../components/SuccessMessage";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { verifyPasswordResetCode, confirmResetPassword } from "../../store/effects/auth";
import { useDispatch, useSelector } from 'react-redux';
import { notification } from "../../components/Notification";
import styles from "./styles.module.css";

const ResetPassword = () => {
  const dispatch = useDispatch()
  const location = useLocation();

  const actionCode = new URLSearchParams(location?.search).get('oobCode');
  const success = useSelector(state => state.auth.success);
  const error = useSelector(state => state.auth.error);
  const loading = useSelector(state => state.auth.loading);

  const [validations, setValidations] = useState({})
  const [resetPassword, setResetPassword] = useState({
    password: "",
    Rpassword: "",
  })

  const [message, setMessage] = useState(false);

  const _handleChange = name => value => {
    setValidations(state => ({ ...state, [name]: false }))
    setResetPassword(state => ({ ...state, [name]: value }))
  }

  const _handleClick = () => {
    let validated = true;
    if (!password) {
      setValidations(state => ({ ...state, password: "Password is required" }))
      validated = false;
    }
    if (password && password.length < 6) {
      setValidations(state => ({ ...state, password: "Password length must be atleast 6 characters" }))
      validated = false;
    }
    if (!Rpassword) {
      setValidations(state => ({ ...state, Rpassword: "Repeat password is required" }))
      validated = false;
    }
    if (Rpassword && Rpassword !== password) {
      setValidations(state => ({ ...state, Rpassword: "Passwords do not match" }))
      validated = false;
    }
    if (validated && !validations['password']) {
      dispatch(confirmResetPassword(actionCode, password))
    }
  }

  useEffect(() => {
    dispatch(verifyPasswordResetCode(actionCode))
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (error) notification("error", error)
    if (success) setMessage(true)
    // eslint-disable-next-line
  }, [error, success])

  const { password, Rpassword } = resetPassword;

  return (
    <div className={styles.section}>
      {!message && <React.Fragment>
        <Header heading={"Reset Password"} hideButton />
        <div className={styles.form}>
          <div className={styles.feilds}>
            <Label title="Password" error={Boolean(validations['password'])} />
            <InputPassword
              placeholder="Enter your password"
              icon
              value={password || ""}
              error={(validations['password'] && !password && validations['password'])
                || (validations['password'] && password && validations['password'])}
              onChange={_handleChange("password")}
            />
          </div>
          <div className={styles.feilds}>
            <Label title="Repeat New Password" error={Boolean(validations['Rpassword'])} />
            <InputPassword
              placeholder="Enter repeat password"
              icon
              value={Rpassword || ""}
              error={(validations['Rpassword'] && !password && validations['Rpassword'])
                || (validations['Rpassword'] && password && validations['Rpassword'])}
              onChange={_handleChange("Rpassword")}
            />
          </div>
          <div className={`${styles.feilds} ${loading && styles.disable}`}>
            <Button onClick={_handleClick} fontWeight="600" borderRadius="3px" background="#FFB121" title={"Reset Password"} />
          </div>
        </div>
      </React.Fragment>}
      {message &&
        <div className={`${styles.form} ${styles.successBox}`}>
          <SuccessMessage
            heading="Password Reset"
            text='Your password has been reset successfully'
          />
          <div className={styles.buttons}>
            <Link to="/">
              <Button borderRadius="3px" background="#FFB121" fontWeight="600" title="Sign In" />
            </Link>
          </div>
        </div>}
    </div>
  )
}
export default ResetPassword;