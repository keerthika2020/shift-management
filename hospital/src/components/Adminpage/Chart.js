import React from "react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "./Chart.css";

const data = [
  { name: "January", users: 20, earnings: 1000 },
  { name: "February", users: 15, earnings: 1500 },
  { name: "March", users: 25, earnings: 2000 },
  { name: "April", users: 30, earnings: 2500 },
  { name: "May", users: 40, earnings: 3000 },
];

function Chart({ title, dataKey }) {
  return (
    <div className="chart">
      <h3>{title}</h3>
      {dataKey === "users" ? (
        <LineChart width={400} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="users" stroke="#8884d8" />
        </LineChart>
      ) : (
        <BarChart width={400} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="earnings" fill="#82ca9d" />
        </BarChart>
      )}
    </div>
  );
}

export default Chart;