import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const PersonalOverviewStaffPage = () => {
    const attendanceData = {
        labels: ['Total Working Days', 'Present Days', 'Remaining Leaves'],
        datasets: [
            {
                label: 'Attendance',
                data: [200, 190, 10],
                backgroundColor: ['#3498db', '#2ecc71', '#e74c3c'],
                borderColor: ['#2980b9', '#27ae60', '#c0392b'],
                borderWidth: 1
            }
        ]
    };

    const workingHoursData = {
        labels: ['Completed Hours', 'Remaining Hours'],
        datasets: [
            {
                label: 'Working Hours',
                data: [1800, 200],
                backgroundColor: ['#1abc9c', '#f39c12'],
                borderColor: ['#16a085', '#e67e22'],
                borderWidth: 1
            }
        ]
    };

    return (
        <div style={{ display: 'flex' }} className="wrapper_staffpage">
            {/* Sidebar */}
            <nav style={{ width: '250px', backgroundColor: '#0F6A6B', color: 'white', padding: '20px', position: 'fixed', height: '100vh', top: '0' }} className="sidebar_staffpage">
                <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '30px' }} className="logo_staffpage">Vitality Healthcare</div>
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                    <li style={{ margin: '20px 0' }}><a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fa fa-user"></i> Personal Overview</a></li>
                    <li style={{ margin: '20px 0' }}><a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fa fa-calendar"></i> Function Availability</a></li>
                    <li style={{ margin: '20px 0' }}><a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fa fa-exchange-alt"></i> Shift Swap</a></li>
                    <li style={{ margin: '20px 0' }}><a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fa fa-bell"></i> Notification Alerts</a></li>
                    <li style={{ margin: '20px 0' }}><a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fa fa-history"></i> Shift History</a></li>
                    <li style={{ margin: '20px 0' }}><a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fa fa-sign-out-alt"></i> Logout</a></li>
                </ul>
            </nav>

            {/* Main Content */}
            <div style={{ marginLeft: '270px', padding: '30px', width: 'calc(100% - 270px)', backgroundColor: '#ecf0f1' }} className="main-content_staffpage">
                <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Welcome, Dr. Sharmika Anandhan</h2>
                <p>Below is your personalized dashboard with all your details.</p>

                {/* Personal Details */}
                <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }} className="info-section_staffpage">
                    <h3 style={{ fontSize: '20px' }}><i className="fa fa-id-card"></i> Personal Details</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <tr>
                            <th style={{ padding: '10px', backgroundColor: '#f1f1f1' }}>Staff ID</th>
                            <td style={{ padding: '10px' }}>[12345]</td>
                        </tr>
                        <tr>
                            <th style={{ padding: '10px', backgroundColor: '#f1f1f1' }}>Name</th>
                            <td style={{ padding: '10px' }}>[Dr. Sharmika Anandhan]</td>
                        </tr>
                        <tr>
                            <th style={{ padding: '10px', backgroundColor: '#f1f1f1' }}>Email</th>
                            <td style={{ padding: '10px' }}>[sharmika@vitality.com]</td>
                        </tr>
                        <tr>
                            <th style={{ padding: '10px', backgroundColor: '#f1f1f1' }}>Department</th>
                            <td style={{ padding: '10px' }}>Cardiology</td>
                        </tr>
                        <tr>
                            <th style={{ padding: '10px', backgroundColor: '#f1f1f1' }}>Role</th>
                            <td style={{ padding: '10px' }}>Cardiologist</td>
                        </tr>
                    </table>
                </div>

                {/* Attendance Details */}
                <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }} className="info-section_staffpage">
                    <h3 style={{ fontSize: '20px' }}><i className="fa fa-calendar-check"></i> Attendance Details</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <tr>
                            <th style={{ padding: '10px', backgroundColor: '#f1f1f1' }}>Total Working Days</th>
                            <td style={{ padding: '10px' }}>[200]</td>
                        </tr>
                        <tr>
                            <th style={{ padding: '10px', backgroundColor: '#f1f1f1' }}>Present Days</th>
                            <td style={{ padding: '10px' }}>[190]</td>
                        </tr>
                        <tr>
                            <th style={{ padding: '10px', backgroundColor: '#f1f1f1' }}>Remaining Leaves</th>
                            <td style={{ padding: '10px' }}>[10]</td>
                        </tr>
                    </table>
                </div>

                {/* Shift Schedule */}
                <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }} className="info-section_staffpage">
                    <h3 style={{ fontSize: '20px' }}><i className="fa fa-calendar-day"></i> Upcoming Shifts</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <tr>
                            <th style={{ padding: '10px', backgroundColor: '#f1f1f1' }}>Date</th>
                            <th style={{ padding: '10px', backgroundColor: '#f1f1f1' }}>Shift Time</th>
                            <th style={{ padding: '10px', backgroundColor: '#f1f1f1' }}>Location</th>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>2024-12-15</td>
                            <td style={{ padding: '10px' }}>8:00 AM - 2:00 PM</td>
                            <td style={{ padding: '10px' }}>Ward A</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px' }}>2024-12-16</td>
                            <td style={{ padding: '10px' }}>2:00 PM - 8:00 PM</td>
                            <td style={{ padding: '10px' }}>ICU</td>
                        </tr>
                    </table>
                </div>

                {/* Working Hours */}
                <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }} className="info-section_staffpage">
                    <h3 style={{ fontSize: '20px' }}><i className="fa fa-clock"></i> Total Working Hours</h3>
                    <p><strong>1800 hours</strong> completed this year.</p>
                </div>

                {/* Attendance Chart */}
                <div style={{ marginTop: '30px' }} className="chart-container_staffpage">
                    <Line data={attendanceData} options={{ responsive: true }} />
                </div>

                {/* Working Hours Chart */}
                <div style={{ marginTop: '30px' }} className="chart-container_staffpage">
                    <Line data={workingHoursData} options={{ responsive: true }} />
                </div>

                <div style={{ textAlign: 'center', fontSize: '14px', marginTop: '50px', color: '#7f8c8d' }} className="footer_staffpage">
                    &copy; 2024 Vitality Healthcare. All Rights Reserved.
                </div>
            </div>
        </div>
    );
};

export default PersonalOverviewStaffPage;
