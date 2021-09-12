import React from "react";
import Card from "../../../components/Card";
import styles from "./styles.module.css";
import { getSummary } from "../../../utils/functions";
import SimpleCard from "../../../components/SimpleCard";

const Summary = ({ data }) => {
  const summary = getSummary(data, 'Mar')
  const isNotPresent = summary['Total Hours'] < 1;
  console.log('summary', summary)
  return (
    <div className={styles.container}>
      <Card heading="Score" textEffect="Summary">
        <div className={styles.records}>
          {Object.keys(summary).map(key => {
            const error = isNotPresent
              || (key === 'Min Hours' && summary[key] < 8)
              || (key === 'Days < 8' && summary[key] > 0)
              || (key === 'Missed Punch Outs' && summary[key] > 0)
            return <div className={styles.box}>
              <SimpleCard heading={key} value={summary[key]} error={error} />
            </div>
          })}
        </div>
      </Card>
    </div>
  );
}

export default Summary;