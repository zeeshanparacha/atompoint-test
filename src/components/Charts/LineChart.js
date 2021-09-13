import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useWindowSize } from "../../utils/hooks";
import './styles.css';

const Chart = ({ data }) => {
  const { width } = useWindowSize()
  const isMobileView = Boolean(width < 575);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`Time : ${label ? label : "Missed Punch In"}`}</p>
          <p className="label">{`Date : ${payload[0].payload.date}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="105%" height="100%" className="dashboard-graph">
      <LineChart
        width={800}
        height={300}
        data={data}
      >
        <defs>
          <filter id="shadow" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#2FDD89" />
          </filter>
        </defs>
        <CartesianGrid strokeDasharray="0" />
        <XAxis dy={15} dataKey="label" height={30} minTickGap={300} interval={isMobileView ? 15 : 2} textAnchor="start" />
        <YAxis tickCount={5} />
        <Tooltip content={<CustomTooltip />} />
        <Line type="monotone" dataKey="time" stroke="#2FDD89" filter="url(#shadow)" strokeWidth={2} activeDot={{ r: 5 }}
          legendType="none" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Chart;