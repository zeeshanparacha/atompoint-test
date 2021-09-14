import React, { useState } from "react";
import Dropdown from "../../../components/Dropdown";
import { ReactComponent as User } from "../../../images/email.svg"
import { ReactComponent as DateIcon } from "../../../images/date.svg"
import { dates } from "../../../utils/locales";
import { changeMonth, setUser } from "../../../store/actions/users";
import { fetchUserData, } from "../../../store/effects/users";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const [month, setMonth] = useState("March");
  const user = useSelector(state => state?.auth?.user);
  const filterUser = useSelector(state => state?.users?.email);
  const allUsers = useSelector(state => state?.users?.allUsers);
  const usersList = allUsers?.map(({ email }) => ({ label: email, value: email }))

  const _handleChangeMonth = (item) => {
    const { label, value } = item;
    dispatch(changeMonth(value))
    setMonth(label)
  }

  const _handleChangeUser = (email) => {
    dispatch(fetchUserData(email))
    dispatch(setUser(email))
  }

  const { email, role } = user || {};

  return (
    <div className={styles.container}>
      <div className={styles.dropdown}>
        <DateIcon />
        <Dropdown
          value={month || "March"}
          list={dates}
          placeholder="Select month"
          onSelect={(value) => _handleChangeMonth(value)} />
      </div>
      <div>
        {role === 'admin' ? (
          <div className={styles.dropdown}>
            <User />
            <Dropdown
              value={filterUser || email}
              placeholder="Select user"
              list={usersList}
              onSelect={(item) => _handleChangeUser(item?.label)}
            />
          </div>
        ) : (
          <div className={styles.dropdown}>
            <User />
            <p>{email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
