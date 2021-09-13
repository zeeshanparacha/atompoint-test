import React, { useEffect } from "react";
import { fetchUserData } from "../../store/effects/users";
import { useDispatch, useSelector } from "react-redux";
import Summary from "./summary";
import Header from "./header";
import PunchInTime from "./punchInTime";
import Absents from "./absents";
import HoursWorked from "./hoursWorked";
import Loader from "../../components/Loader";
import Error from "../../components/Error404";
import styles from "./styles.module.css";

export default function App() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state?.users?.loading);
  const user = useSelector(state => state?.users?.data);
  const email = useSelector(state => state?.auth?.user?.email);

  useEffect(() => {
    dispatch(fetchUserData(email))
    // eslint-disable-next-line
  }, [email]);

  if (loading) return <Loader />
  if (!user) return <Error />

  return (
    <div className={`${styles.container}`}>
      <Header isAdmin />
      <Summary />
      <PunchInTime />
      <div className={styles.flex}>
        <Absents />
        <HoursWorked />
      </div>
    </div>
  );
}