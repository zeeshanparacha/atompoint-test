import React from "react";
import Dropdown from "../../../components/Dropdown";
import { ReactComponent as User } from "../../../images/email.svg"
import { ReactComponent as DateIcon } from "../../../images/date.svg"
import { dates } from "../../../utils/locales";
import styles from "./styles.module.css";

const Header = ({ isAdmin, _handleDateSelect, _handleUsersSelect, date, user }) => {
  return (
    <div className={styles.container}>
      <div className={styles.dropdown}>
        <DateIcon />
        <Dropdown
          value={date || "March"}
          list={dates}
          placeholder="Select month"
          onSelect={(value) => _handleDateSelect(value)} />
      </div>
      <div>
        {isAdmin ? (
          <div className={styles.dropdown}>
            <User />
            <Dropdown
              value={user}
              placeholder="Select user"
              onSelect={(value) => _handleUsersSelect(value)} />
          </div>
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
