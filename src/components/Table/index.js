import React from 'react'
import { Table } from 'antd';
import "./styles.css";
import styles from "./styles.module.css";

const DataTable = ({ columns, rows }) => {

  return (
    <div className={styles.table}>
      <Table columns={columns}
        size={"small"}
        pagination={{
          defaultPageSize: 5,
          showSizeChanger: false,
          pageSizeOptions: ['5']
        }}
        dataSource={rows}
        showSorterTooltip={false} />
    </div>
  )
}
export default DataTable;