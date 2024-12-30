import React from 'react';
import Sidebar from './Sidebar'; // Assuming Sidebar.js exists in the same directory
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import './hodpagestyles/hodattendancetrends.css'

ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend);

const AttendanceTrends = () => {
  // Chart Data and Configuration
  const absenteeismData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Absentees (%)',
        data: [5, 8, 4, 7],
        backgroundColor: 'rgba(231, 76, 60, 0.5)',
        borderColor: 'rgba(231, 76, 60, 1)',
        borderWidth: 1,
      },
    ],
  };

  const productivityTrendsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Productivity Score',
        data: [78, 85, 82, 88, 90, 92],
        borderColor: 'rgba(46, 204, 113, 1)',
        backgroundColor: 'rgba(46, 204, 113, 0.2)',
        borderWidth: 2,
        tension: 0.3, // Smooth line
        fill: true,
      },
    ],
  };

  const workloadData = {
    labels: ['John', 'Jane', 'Emily', 'David'],
    datasets: [
      {
        label: 'Hours Worked',
        data: [160, 150, 140, 170],
        backgroundColor: 'rgba(52, 152, 219, 0.7)',
      },
    ],
  };

  const onDutyOffShiftData = [
    { name: 'John Doe', status: 'On Duty', shift: '9:00 AM - 5:00 PM' },
    { name: 'Jane Smith', status: 'Off Shift', shift: 'N/A' },
    { name: 'Emily Brown', status: 'On Duty', shift: '10:00 AM - 6:00 PM' },
    { name: 'David Lee', status: 'Off Shift', shift: 'N/A' },
  ];

  return (
    <div className="container_hodattendancetrends">
      <Sidebar />
      <div className="content_hodattendancetrends">
        <div className="header_hodattendancetrends">
          <h1>Attendance Trends</h1>
        </div>

        {/* Summary Cards */}
        <div className="card-container_hodattendancetrends">
          <div className="card_hodattendancetrends">
            <div className="card-header_hodattendancetrends">On Time Percentage</div>
            <div className="card-value_hodattendancetrends">65%</div>
            <div className="card-subtext_hodattendancetrends">
              <span className="down_hodattendancetrends">↓ 25%</span> Compared to November
            </div>
          </div>

          <div className="card_hodattendancetrends">
            <div className="card-header_hodattendancetrends">Late Percentage</div>
            <div className="card-value_hodattendancetrends">35%</div>
            <div className="card-subtext_hodattendancetrends">
              <span className="up_hodattendancetrends">↑ 35%</span> Compared to November
            </div>
          </div>

          <div className="card_hodattendancetrends">
            <div className="card-header_hodattendancetrends">Total Working Hours / December</div>
            <div className="card-value_hodattendancetrends">
              00 Hours 40 Minutes 52 Seconds
            </div>
            <div className="card-subtext_hodattendancetrends">
              <span className="up_hodattendancetrends">↑ 33%</span> Compared to November
            </div>
          </div>

          <div className="card_hodattendancetrends">
            <div className="card-header_hodattendancetrends">Total Break Hours / December</div>
            <div className="card-value_hodattendancetrends">
              00 Hours
              <br />
              40 Minutes
              <br />
              55 Seconds
            </div>
            <div className="card-subtext_hodattendancetrends">
              <span className="down_hodattendancetrends">↓ 13%</span> Compared to November
            </div>
          </div>
        </div>

        {/* Attendance Records */}
        <h2>Attendance Records</h2>
        <table className="table_hodattendancetrends">
          <thead>
            <tr>
              <th>Staff Name</th>
              <th>Date</th>
              <th>Status</th>
              <th>Arrival Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>2024-12-08</td>
              <td>Present</td>
              <td>09:00 AM</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>2024-12-08</td>
              <td>Late</td>
              <td>09:15 AM</td>
            </tr>
            <tr>
              <td>Emily Brown</td>
              <td>2024-12-08</td>
              <td>Absent</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>David Lee</td>
              <td>2024-12-08</td>
              <td>Present</td>
              <td>08:45 AM</td>
            </tr>
          </tbody>
        </table>

        {/* Alerts */}
        <h2>Alerts</h2>
        <div className="alert_hodattendancetrends">
          <strong>Alert:</strong> Jane Smith has arrived late twice this week.
        </div>
        <div className="alert_hodattendancetrends">
          <strong>Alert:</strong> Emily Brown has been absent for 3 consecutive days.
        </div>

        {/* Charts */}
        <h2>Trends</h2>
        <div className="chart-container_hodattendancetrends">
          <div className="chart_hodattendancetrends">
            <Line data={productivityTrendsData} />
          </div>
          <div className="chart_hodattendancetrends">
            <Bar data={workloadData} />
          </div>
        </div>

        {/* On-Duty and Off-Shift */}
        <h2>On-Duty and Off-Shift Details</h2>
        <table className="table_hodattendancetrends">
          <thead>
            <tr>
              <th>Staff Name</th>
              <th>Status</th>
              <th>Shift</th>
            </tr>
          </thead>
          <tbody>
            {onDutyOffShiftData.map((staff, index) => (
              <tr key={index}>
                <td>{staff.name}</td>
                <td>{staff.status}</td>
                <td>{staff.shift}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceTrends;
