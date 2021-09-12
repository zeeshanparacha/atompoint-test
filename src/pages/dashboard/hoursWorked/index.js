import React from "react";
import BarChart from "../../../components/Charts/BarChart";
import Card from "../../../components/Card";
import { getTotalWorkedHours } from "../../../utils/functions";
import styles from "./styles.module.css";

const Absents = ({ data }) => {
  const days = getTotalWorkedHours(data, "Mar")
  return (
    <Card heading="Total" textEffect="Hours Worked">
      <div className={styles.container}>
        <BarChart data={days || []} />
      </div>
    </Card>
  );
};

export default Absents;
