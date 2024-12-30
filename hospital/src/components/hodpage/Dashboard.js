import React from 'react';
import Sidebar from './Sidebar'; // Import your existing Sidebar component
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    PieController,
    Tooltip,
    Legend,
} from 'chart.js';
import './hodpagestyles/hoddashboard.css';

ChartJS.register(
    BarElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    PieController,
    Tooltip,
    Legend
);

const Dashboard = () => {
    // Data for Attendance Line Chart
    const attendanceData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
            {
                label: 'Attendance (%)',
                data: [90, 85, 88, 92, 95],
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.1)',
            },
        ],
    };

    // Data for Workload Bar Chart
    const workloadData = {
        labels: ['Doctors', 'Nurses', 'Technicians', 'Support Staff'],
        datasets: [
            {
                label: 'Hours Worked',
                data: [40, 35, 30, 25],
                backgroundColor: ['blue', 'green', 'orange', 'purple'],
            },
        ],
    };

    // Attendance Trend Charts Data
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

    const punctualityData = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
        datasets: [
            {
                label: 'Punctuality (%)',
                data: [98, 95, 92, 90, 93],
                borderColor: 'rgba(52, 152, 219, 1)',
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                borderWidth: 2,
            },
        ],
    };

    const monthlyAttendanceData = {
        labels: ['Present', 'Late', 'Absent'],
        datasets: [
            {
                data: [70, 15, 15],
                backgroundColor: ['#2ecc71', '#f39c12', '#e74c3c'],
                hoverOffset: 4,
            },
        ],
    };

    const yearlyTrendsData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Attendance (%)',
                data: [95, 90, 92, 93, 88, 91],
                backgroundColor: 'rgba(155, 89, 182, 0.5)',
                borderColor: 'rgba(155, 89, 182, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="dashboardContainer_hoddash">
            {/* Sidebar on the left */}
            <div className="sidebarWrapper_hoddash">
                <Sidebar />
            </div>

            {/* Main content on the right */}
            <div className="mainContent_hoddash">
                <h1>HOD Dashboard</h1>

                {/* Top Section: Statistics Overview */}
                <section className="section_hoddash">
                    <div className="cardChartContainer_hoddash">
                        <h4>Emergency Staffing Needs</h4>
                        <p>Available: <strong>4</strong></p>
                    </div>
                    <div className="cardChartContainer_hoddash">
                        <h4>Staff Availability</h4>
                        <p>Available: <strong>5</strong></p>
                    </div>
                    <div className="cardChartContainer_hoddash">
                        <h4>Current Shift Status</h4>
                        <p>On Duty: <strong>12</strong></p>
                    </div>
                    <div className="cardChartContainer_hoddash">
                        <h4>Top Performers</h4>
                        <p>Hasika: <strong>92%</strong></p>
                        <p>Sharminka: <strong>90%</strong></p>
                    </div>
                    <div className="cardChartContainer_hoddash">
                        <h4>Department: Cardiology</h4>
                        <p>Total Staffs: <strong>15</strong></p>
                        <p>On Duty: <strong>12</strong></p>
                    </div>
                    <div className="cardChartContainer_hoddash">
                        <h4>Staff Summary</h4>
                        <p>Total Staffs: <strong>50</strong></p>
                        <p>Active Staffs: <strong>40</strong></p>
                    </div>
                </section>

                {/* Charts Section */}
                <section className="chartsSection_hoddash">
                    <div className="chartContainer_hoddash">
                        <h3>Attendance Comparison</h3>
                        <Line
                            data={attendanceData}
                            options={{ responsive: true, maintainAspectRatio: false }}
                        />
                    </div>
                    <div className="chartContainer_hoddash">
                        <h3>Workload Distribution</h3>
                        <Bar
                            data={workloadData}
                            options={{ responsive: true, maintainAspectRatio: false }}
                        />
                    </div>
                    <div className="chartContainer_hoddash">
                        <h3>Absenteeism Trends</h3>
                        <Bar
                            data={absenteeismData}
                            options={{ responsive: true, maintainAspectRatio: false }}
                        />
                    </div>
                    <div className="chartContainer_hoddash">
                        <h3>Punctuality Trends</h3>
                        <Line
                            data={punctualityData}
                            options={{ responsive: true, maintainAspectRatio: false }}
                        />
                    </div>
                    <div className="chartContainer_hoddash" >
                        <h3>Monthly Attendance</h3>
                        <Pie style={{ width: "340px",height: "200px" }}
                            data={monthlyAttendanceData}
                            options={{ responsive: true, maintainAspectRatio: false }}
                        />
                    </div>
                    <div className="chartContainer_hoddash">
                        <h3>Yearly Trends</h3>
                        <Bar
                            data={yearlyTrendsData}
                            options={{ responsive: true, maintainAspectRatio: false }}
                        />
                    </div>
                </section>

                {/* Notifications Section */}
                <section className="notificationsSection_hoddash">
                    <h3>Notifications</h3>
                    <ul className="notifications_hoddash">
                        <li className="notificationItem_hoddash">
                            <span className="dot_hoddash"></span> Shift request from Hasi.
                        </li>
                        <li className="notificationItem_hoddash">
                            <span className="dot_hoddash"></span> Meeting at 3:00 PM today.
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;
