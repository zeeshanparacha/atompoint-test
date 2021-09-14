import React, { useEffect } from "react";
import { fetchUserData, fetchAllUsers } from "../../store/effects/users";
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
  const data = useSelector(state => state?.users?.data);
  const user = useSelector(state => state?.auth?.user);

  useEffect(() => {
    const { email, _id, role } = user || {}
    dispatch(fetchUserData(email))
    if (role === 'admin') {
      dispatch(fetchAllUsers(_id))
    }
    // eslint-disable-next-line
  }, []);

  if (loading) return <Loader />

  return (
    <div className={`${styles.container}`}>
      <Header />
      {data ? (
        <>
          <Summary />
          <PunchInTime />
          <div className={styles.flex}>
            <Absents />
            <HoursWorked />
          </div>
        </>
      ) : <Error />}
    </div>
  );
}