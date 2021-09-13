import React from "react";
import Table from "../../../components/Table";
import Card from "../../../components/Card";
import { getAbsentDates } from "../../../utils/functions";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";

const Absents = () => {
  const user = useSelector(state => state?.users?.data);
  const month = useSelector(state => state?.users?.month);
  const dates = getAbsentDates(user, month)

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
