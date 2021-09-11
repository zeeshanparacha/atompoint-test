import React from "react";
import Card from "../../../components/Card";
import styles from "./styles.module.css";
import { totalHours } from "../../../utils/functions";
import SimpleCard from "../../../components/SimpleCard";

const Summary = ({ data }) => {
  const monthData = Object.keys(data)
    .filter(item => data[item]?.Date?.includes('Mar'))
    .map(item => data[item])

  console.log(totalHours(monthData))
  return (
    <div className={styles.container}>
      <Card heading="Attendence Summary">
        <div className={styles.records}>
          <div className={styles.box}>
            <SimpleCard heading="Total Hours" value="163" />
          </div>
          <div className={styles.box}>
            <SimpleCard heading="Absences" value="2" />
          </div>
          <div className={styles.box}>
            <SimpleCard heading="Avg. Hours" value="7.5" />
          </div>
          <div className={styles.box}>
            <SimpleCard heading="Max Hours" value="9.25" />
          </div>
          <div className={styles.box}>
            <SimpleCard heading="Min Hours" value="6.55" />
          </div>
          <div className={styles.box}>
            <SimpleCard heading="Days < 8" value="1" danger />
          </div>
          <div className={styles.box}>
            <SimpleCard heading="Present Days" value="21/22" />
          </div>
          <div className={styles.box}>
            <SimpleCard heading="Missed Punch-outs" value="0" />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Summary;