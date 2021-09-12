import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { useWindowSize } from "../../utils/hooks";
import './styles.css';

const Chart = ({ data }) => {
  const { width } = useWindowSize()
  const isMobileView = Boolean(width < 575);
  return (
    <ResponsiveContainer width="108%" minHeight={300} className="trade-graph">
      <BarChart
        data={data}
        width={800}
        height={300}
      >
        <XAxis height={20} angle={0} tick={{ fontSize: 11 }} minTickGap={300} interval={isMobileView ? 15 : 4} textAnchor="start" dataKey="Date" />
        <YAxis width={80} orientation="right" />
        <Bar dataKey={'hoursWorked'}>
          {data.map((item) => {
            const color = item.hoursWorked < 8 ? '#EF464696' : '#2FDD8996';
            return <Cell fill={color} />;
          })
          }
        </Bar>
        <Tooltip />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default Chart;