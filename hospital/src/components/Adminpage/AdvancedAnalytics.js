import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import "./AdvancedAnalytics.css";

// Register components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const AdvancedAnalytics = () => {
  const costAnalysisData = {
    labels: ["Operational Cost", "Salaries", "Miscellaneous"],
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const overtimeData = {
    labels: ["Overtime", "Regular Hours"],
    datasets: [
      {
        data: [20, 80],
        backgroundColor: ["#FF6384", "#4CAF50"],
      },
    ],
  };

  const performanceData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Performance Report",
        data: [80, 85, 90, 95, 100],
        backgroundColor: "#36A2EB",
      },
    ],
  };

  return (
    <div className="analytics-container">
      <h1 className="analytics-title">Advanced Analytics</h1>

      {/* Pie Charts Row */}
      <div className="chart-container">
        <div className="chart-card">
          <Pie data={costAnalysisData} />
          <h3>Cost Analysis</h3>
        </div>
        <div className="chart-card">
          <Pie data={overtimeData} />
          <h3>Overtime Hours</h3>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bar-chart-container">
        <Bar data={performanceData} />
        <h3>Performance Report</h3>
      </div>
    </div>
  );
};

export default AdvancedAnalytics;
