import React from "react";
import Table from "../../../components/Table";
import Card from "../../../components/Card";
import { getAbsentDates } from "../../../utils/functions";
import styles from "./styles.module.css";

const Absents = ({ data }) => {
  const dates = getAbsentDates(data, "Mar")

  const columns = [
    {
      title: () => `Dates`,
      dataIndex: 'Date',
      key: 'Date',
      render: (text) => <p className="title">{text}</p>,
    },
  ];

  return (
    <Card heading="Absent" textEffect="Dates">
      <div className={styles.container}>
        <Table columns={columns} rows={dates} />
      </div>
    </Card>
  );
};

export default Absents;
