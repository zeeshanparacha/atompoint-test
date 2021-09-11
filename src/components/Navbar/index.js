import React from 'react'
import { ReactComponent as Logout } from "../../images/logout.svg";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/effects/auth";
import styles from "./styles.module.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const _handleLogout = () => dispatch(signOut())

  return (
    <div className={styles.navbar}>
      <div className="wrapper">
        <div className={styles.container}>
          <div className={styles.brand}>
            <h1>EMSYSTEM</h1>
          </div>
          <div className={styles.logout}>
            <p onClick={_handleLogout}><Logout /></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;