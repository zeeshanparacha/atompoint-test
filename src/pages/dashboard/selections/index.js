import React, { useState, Fragment } from "react";
import Dropdown from "../../../components/Dropdown";
import Label from "../../../components/Label";
import { ReactComponent as User } from "../../../images/user.svg"
import { dates } from "../../../utils/locales";
import styles from "./styles.module.css";

const Header = ({ isAdmin, _handleDateSelect, _handleUsersSelect, date, user }) => {
  return (
    <div className={styles.container}>
      <div>
        <Label title="Select Month" />
        <Dropdown
          value={date || "March"}
          onSelect={_handleDateSelect}
          list={dates}
          placeholder="Select Month"
        />
      </div>
      <div>
        {isAdmin ? (
          <Fragment>
            <Label title="Select Users" />
            <Dropdown
              onSelect={_handleUsersSelect}
              value={user}
              placeholder="Select User"
            />
          </Fragment>
        ) : (
          <div className={styles.information}>
            <div className={styles.icon}><User /></div>
            <p>{user}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
