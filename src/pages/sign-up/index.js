import React, { useState, useEffect } from 'react'
import InputPassword from '../../components/InputPassword';
import Header from "../../components/Header";
import InputText from '../../components/InputText';
import Button from "../../components/Buttons";
import Label from "../../components/Label";
import SuccessMessage from "../../components/SuccessMessage";
import { Link } from "react-router-dom";
import { register } from "../../store/effects/auth";
import { useDispatch, useSelector } from 'react-redux';
import { notification } from "../../components/Notification";
import { validateEmail } from "../../utils/regexs";
import styles from "./styles.module.css";

const SignUp = () => {
  const dispatch = useDispatch()

  const success = useSelector(state => state.auth.success);
  const error = useSelector(state => state.auth.error);
  const loading = useSelector(state => state.auth.loading);

  useEffect(() => {
    if (error) notification("error", error)
    // eslint-disable-next-line
  }, [error])

  const [validations, setValidations] = useState({})
  const [state, setState] = useState({
    email: "",
    password: "",
  })

  const _handleChange = name => value => {
    setValidations(state => ({ ...state, [name]: false }))
    setState(state => ({ ...state, [name]: value }))
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
    if (!password) {
      setValidations(state => ({ ...state, password: "Password is required" }))
      validated = false;
    }
    if (password && password.length < 6) {
      setValidations(state => ({ ...state, password: "Password length must be atleast 6 characters" }))
      validated = false;
    }
    if (validated && !validations['email'] && !validations['password']) {
      dispatch(register(email, password))
    }
  }

  const { email, password } = state;

  return (
    <div className={styles.section}>
      {!success && <React.Fragment>
        <Header heading={"Sign Up to EMS"} hideButton />
        <div className={styles.form}>
          <div className={styles.feilds}>
            <Label title="Email Address" error={Boolean(validations['email'])} />
            <InputText
              placeholder="Enter your email"
              type="email"
              value={email || ""}
              error={(validations['email'] && !email && validations['email']) ||
                (validations['email'] && email && validations['email'])}
              onChange={_handleChange("email")}
            />
          </div>
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
          <div className={`${styles.feilds} ${loading && styles.disable}`}>
            <Button onClick={_handleClick} fontWeight="600" borderRadius="3px" background="#FFB121" title={loading ? "Signing up..." : "Sign Up"} />
          </div>
          <div className={styles.footer}>
            <p>Already have an account? <Link to="/"><span className={styles.link}>Sign In</span></Link></p>
          </div>
        </div>
      </React.Fragment>}
      {success &&
        <div className={`${styles.form} ${styles.successBox}`}>
          <SuccessMessage
            heading="Registered Successfully"
            text='Check your email to confirm your registration'
          />
          <div className={styles.buttons}>
            <Link to="/">
              <Button borderRadius="3px" background="#FFB121" fontWeight="600" title={"Sign In"} />
            </Link>
          </div>
        </div>}
    </div>
  )
}
export default SignUp;