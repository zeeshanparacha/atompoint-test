import React from 'react';
import LineChart from "../../../components/Charts/LineChart";
import Card from '../../../components/Card';
import { getPunchInTime } from "../../../utils/functions";
import styles from './styles.module.css';

const TotalHoursWorked = ({ data }) => {
  const days = getPunchInTime(data, "Mar")
  return (
    <Card heading="Punch In" textEffect="Time">
      <div className={styles.container}>
        <LineChart data={days} />
      </div>
    </Card>
  )
}

export default TotalHoursWorked;