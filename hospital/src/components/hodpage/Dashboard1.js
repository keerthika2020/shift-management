import React , { useEffect, useState } from 'react';
import Sidebar1 from './Sidebar1'; // Import your existing Sidebar component
import { Line, Bar, Pie } from 'react-chartjs-2';
import DatePicker from "react-datepicker"; // Install react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // Import styles
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

const Dashboard1 = () => {
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
    const [staffShifts, setStaffShifts] = useState([
        {
          name: "Dr. Ananya Rao",
          email: "ananya.rao@gmail.com",
          week: "1",
        },
        {
          name: "Nurse Deepa Sharma",
          email: "deepa.sharma@gmail.com",
          week: "2",
        },
      ]);
    
      const [selectedDate, setSelectedDate] = useState(new Date());
      const [showPopup, setShowPopup] = useState(false);
      const [currentStaff, setCurrentStaff] = useState(null); // To track the current staff member for the popup

      const [currentShiftDetails, setCurrentShiftDetails] = useState({
        days: Array(7).fill({ status: "Off", time: "08:00 AM" }), // Default Off status and time
      });
    
      const weeks = ["week 1", "week 2", "week 3", "week 4", "week5"];
      const [deployedLogs, setDeployedLogs] = useState([]);
      // Function to handle deployment action
  const deployaction = () => {
    const newLogs = staffShifts.map((shift) => ({
      name: shift.name,
      email: shift.email,
      week: shift.week,
    }));

    setDeployedLogs([...deployedLogs, ...newLogs]);
    alert("Staff shifts deployed successfully!");
  };
      const handleUpdateShift = (index, field, value) => {
        const updatedShifts = staffShifts.map((shift, i) =>
          i === index ? { ...shift, [field]: value } : shift
        );
        setStaffShifts(updatedShifts);
      };
    
      const handleDayUpdate = (dayIndex, field, value) => {
        const updatedDays = currentShiftDetails.days.map((day, index) =>
          index === dayIndex ? { ...day, [field]: value } : day
        );
        setCurrentShiftDetails({ days: updatedDays });
      };
    
      const openPopup = (staff) => {
        setCurrentStaff(staff); // Set the current staff member
        setShowPopup(true);
    };
    
    const closePopup = () => {
        setShowPopup(false);
        setCurrentShiftDetails({
            days: Array(7).fill({ status: "Off", time: "08:00 AM" }), // Reset to default
        });
    };
    const handlePopupDeploy = () => {
        if (currentStaff) {
            // Create a log entry combining staff and shift details
            const newLog = {
                name: currentStaff.name,
                email: currentStaff.email,
                week: currentStaff.week,
                days: currentShiftDetails.days, // Include the shift details
            };
    
            // Add to deployed logs
            setDeployedLogs([...deployedLogs, newLog]);
    
            // Close popup
            closePopup();
            alert("Shift deployed and logged successfully!");
        }
    };
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchProtectedData = async () => {
        const token = localStorage.getItem("authToken");
  
        if (!token) {
          setError("No token found. Please log in.");
          return;
        }
  
        try {
          const response = await fetch("http://localhost:8082/api/protected", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`, // Include token in the header
            },
          });
  
          const result = await response.json();
  
          if (response.ok) {
            setData(result); // Set the protected data you want to display
          } else {
            setError(result.error || "Failed to fetch protected data.");
          }
        } catch (error) {
          setError("Failed to fetch data. Please try again later.");
        }
      };
  
      fetchProtectedData();
    }, []);
  
    if (error) {
      return <div>{error}</div>;
    }
  
    if (!data) {
      return <div>Loading...</div>;
    }

    

    
    return (
        <div className="dashboardContainer_hoddash">
            {/* Sidebar on the left */}
            <div className="sidebarWrapper_hoddash">
                <Sidebar1 />
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
                        <p>Sharmika: <strong>90%</strong></p>
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

                                        {/* Date Picker */}
                        <div style={{ marginTop: "90px" }}>
                        <h3>Select Date</h3>
                        <DatePicker
                            style={{ marginLeft: "90px" }}
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            dateFormat="yyyy-MM-dd"
                        />
                        <p>Selected Date: {selectedDate.toDateString()}</p>
                        </div>

                        {/* Staff Shift Details Section */}
                        <section style={{ margin: "20px auto", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                        <h3>Staff Shift Details</h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <thead>
                                <tr>
                                <th style={{ padding: "10px", textAlign: "left", border: "1px solid #ddd" }}>Staff Name</th>
                                <th style={{ padding: "10px", textAlign: "left", border: "1px solid #ddd" }}>Email ID</th>
                                <th style={{ padding: "10px", textAlign: "left", border: "1px solid #ddd" }}>Week</th>
                                <th style={{ padding: "10px", textAlign: "left", border: "1px solid #ddd" }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {staffShifts.map((shift, index) => (
                                <tr key={index}>
                                    <td style={{ padding: "10px", textAlign: "left", border: "1px solid #ddd" }}>{shift.name}</td>
                                    <td style={{ padding: "10px", textAlign: "left", border: "1px solid #ddd" }}>{shift.email}</td>
                                    <td style={{ padding: "10px", textAlign: "left", border: "1px solid #ddd" }}>
                                    <select
                                        value={shift.week}
                                        onChange={(e) => handleUpdateShift(index, "week", e.target.value)}
                                    >
                                        {weeks.map((week) => (
                                        <option key={week} value={week}>
                                            {week}
                                        </option>
                                        ))}
                                    </select>
                                    </td>
                                    <td style={{ padding: "10px", textAlign: "left", border: "1px solid #ddd" }}>
                                    <button
                                        style={{ padding: "6px 12px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px", fontSize: "14px", cursor: "pointer", transition: "background-color 0.2s", width: "90px", hover: { backgroundColor: "#0056b3" } }}
                                        onClick={() => openPopup(shift)}
                                    >
                                        Deploy Shift
                                    </button>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                            </table>
                            <button
                            style={{ alignSelf: "flex-end", padding: "6px 12px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px", fontSize: "14px", cursor: "pointer", transition: "background-color 0.2s", width: "90px", hover: { backgroundColor: "#0056b3" } }}
                            onClick={deployaction}
                            >
                            Deploy
                            </button>
                        </div>
                        </section>

                        {/* Popup Card */}
                        {showPopup && (
                        <div style={{ position: "fixed", top: "0", left: "0", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: "9999" }}>
                            <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)", width: "400px" }}>
                            <h3>Deploy Shift</h3>
                            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
                                <thead>
                                <tr>
                                    <th style={{ padding: "8px", textAlign: "left", border: "1px solid #ddd" }}>Day</th>
                                    <th style={{ padding: "8px", textAlign: "left", border: "1px solid #ddd" }}>Status</th>
                                    <th style={{ padding: "8px", textAlign: "left", border: "1px solid #ddd" }}>Shift Timing</th>
                                </tr>
                                </thead>
                                <tbody>
                                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => (
                                    <tr key={index}>
                                    <td style={{ padding: "8px", textAlign: "left", border: "1px solid #ddd" }}>{day}</td>
                                    <td style={{ padding: "8px", textAlign: "left", border: "1px solid #ddd" }}>
                                        <select
                                        value={currentShiftDetails.days[index].status}
                                        onChange={(e) => handleDayUpdate(index, "status", e.target.value)}
                                        >
                                        <option value="Off">Off</option>
                                        <option value="On">On</option>
                                        </select>
                                    </td>
                                    <td style={{ padding: "8px", textAlign: "left", border: "1px solid #ddd" }}>
                                        <input
                                        type="time"
                                        value={currentShiftDetails.days[index].time}
                                        onChange={(e) => handleDayUpdate(index, "time", e.target.value)}
                                        />
                                    </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <button
                                style={{ padding: "6px 12px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px", fontSize: "14px", cursor: "pointer", transition: "background-color 0.2s", width: "90px", hover: { backgroundColor: "#0056b3" } }}
                                onClick={handlePopupDeploy}
                            >
                                Deploy and Close
                            </button>
                            </div>
                        </div>
                        )}

                        {/* Deployed Logs Section */}
                        <section style={{ margin: "20px auto", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                        <h3>Deployed Logs</h3>
                        <div style={{ padding: "10px", backgroundColor: "#fff", borderRadius: "4px", border: "1px solid #ddd" }}>
                            <ul style={{ listStyleType: "none", padding: "0" }}>
                            {deployedLogs.map((log, index) => (
                                <li key={index} style={{ padding: "6px 0", borderBottom: "1px solid #ddd" }}>
                                <strong>Name:</strong> {log.name}, <strong>Email:</strong> {log.email},{" "}
                                <strong>Week:</strong> {log.week}
                                <ul>
                                    {log.days.map((day, dayIndex) => (
                                    <li key={dayIndex}>
                                        <strong>{["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][dayIndex]}:</strong> {day.status} ({day.time})
                                    </li>
                                    ))}
                                </ul>
                                </li>
                            ))}
                            </ul>
                        </div>
                        </section>

                  <div>
                  <p>{JSON.stringify(data)}</p> {/* Display the protected data */}
                    </div>      
    
            </div>
        </div>
    );
};

export default Dashboard1;
