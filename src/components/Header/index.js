import React from "react";
import { ReactComponent as BackArrow } from "../../images/back.svg";
import styles from "./styles.module.css";
import { withRouter } from "react-router";

const HeaderWithBackButton = ({ heading, history, hideButton }) => {
  return (
    <div className={styles.section}>
      {!hideButton &&
        <div className={styles.backButton} onClick={() => history.goBack()}>
          <BackArrow /> <p>Back</p>
        </div>}
      <div className={styles.Text}>
        <h1>{heading}</h1>
      </div>
    </div>
  )
}
HeaderWithBackButton.defaultProps = {
  hideButton: false
}

export default withRouter(HeaderWithBackButton);
