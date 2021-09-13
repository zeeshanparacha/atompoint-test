import React, { useState, useEffect } from 'react'
import InputPassword from '../../components/InputPassword';
import Header from "../../components/Header";
import InputText from '../../components/InputText';
import Button from "../../components/Buttons";
import Label from "../../components/Label";
import { Link } from "react-router-dom";
import { signIn } from "../../store/effects/auth";
import { useDispatch, useSelector } from 'react-redux';
import { notification } from "../../components/Notification";
import { validateEmail } from "../../utils/regexs";
import styles from "./styles.module.css";

const Login = () => {
  const dispatch = useDispatch()
  const error = useSelector(state => state.auth.error);
  const loading = useSelector(state => state.auth.loading);

  useEffect(() => {
    if (error) notification("error", error)
    // eslint-disable-next-line
  }, [error])

  const [validations, setValidations] = useState({})
  const [login, setLogin] = useState({
    email: "",
    password: "",
    remember: "",
  })

  const _handleChange = name => value => {
    setValidations(state => ({ ...state, [name]: false }))
    setLogin(state => ({ ...state, [name]: value }))
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
      dispatch(signIn(email, password))
    }
  }

  const { email, password } = login;

  return (
    <div className={styles.section}>
      <Header heading={"Log In to EMS"} hideButton />
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
        <div className={styles.feilds}>
          <div className={styles.checkbox}>
            <Link to="/forgot-password"><span className={styles.link}>Forgot Password?</span></Link>
          </div>
        </div>
        <div className={`${styles.feilds} ${loading && styles.disable}`}>
          <Button
            onClick={() => _handleClick()}
            fontWeight="600"
            borderRadius="3px"
            background="#FFB121"
            title={loading ? `Signing in...` : `Sign In`} />
        </div>
        <div className={styles.footer}>
          <p>Haven’t an account? <Link to="/signup"><span className={styles.link}>Sign Up</span></Link></p>
        </div>
      </div>
    </div>
  )
}
export default Login;