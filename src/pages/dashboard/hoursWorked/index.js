import React from "react";
import BarChart from "../../../components/Charts/BarChart";
import Card from "../../../components/Card";
import { getTotalWorkedHours } from "../../../utils/functions";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";

const Absents = () => {
  const user = useSelector(state => state?.users?.data);
  const month = useSelector(state => state?.users?.month);
  const days = getTotalWorkedHours(user, month)

  return (
    <Card heading="Total" textEffect="Hours Worked">
      <div className={styles.container}>
        <BarChart data={days || []} />
      </div>
    </Card>
  );
};

export default Absents;
