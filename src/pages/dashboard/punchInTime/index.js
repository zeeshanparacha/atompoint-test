import React from 'react';
import LineChart from "../../../components/Charts/LineChart";
import Card from '../../../components/Card';
import { getPunchInTime } from "../../../utils/functions";
import styles from './styles.module.css';
import { useSelector } from "react-redux";

const TotalHoursWorked = () => {
  const user = useSelector(state => state?.users?.data);
  const month = useSelector(state => state?.users?.month);
  const days = getPunchInTime(user, month)

  return (
    <Card heading="Punch In" textEffect="Time">
      <div className={styles.container}>
        <LineChart data={days} />
      </div>
    </Card>
  )
}

export default TotalHoursWorked;