import React from "react";
import Card from "./Card";
import Chart from "./Chart";
import "./Dashboard2.css";

function Dashboard2() {
  // Example dynamic data
  const departmentCount = 8;
  const doctorCount = 25;
  const patientCount = 150;
  const appointmentCount = 50;

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="cards-container">
        <Card title="Departments" count={departmentCount} icon="🏢" />
        <Card title="Doctors" count={doctorCount} icon="👨‍⚕️" />
        <Card title="Patients" count={patientCount} icon="🧑‍🦽" />
        <Card title="Appointments" count={appointmentCount} icon="📅" />
      </div>
      <div className="charts-container">
        <Chart title="Monthly Registered Users" dataKey="users" />
        <Chart title="Monthly Earnings" dataKey="earnings" />
      </div>
    </div>
  );
}

export default Dashboard2;