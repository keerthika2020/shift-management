import React from "react";
import "./StaffingPatterns.css";

const StaffingPatterns = () => {
  return (
    <div className="staffing-patterns-container">
      <h1 className="title">Staffing Patterns</h1>
      <div className="card-grid">
        {/* First Row */}
        <div className="card">
          <h2>Shift Scheduling</h2>
          <p>Manage staff shifts and create schedules</p>
          <button className="action-button">Manage Shifts</button>
        </div>
        <div className="card">
          <h2>Shift Swapping</h2>
          <p>Approve or deny staff shift swaps</p>
          <button className="action-button">Manage Swaps</button>
        </div>

        {/* Second Row */}
        <div className="card">
          <h2>Leave Management</h2>
          <p>Manage staff leave requests</p>
          <button className="action-button">Manage Leave</button>
        </div>
        <div className="card">
          <h2>Emergency Shift</h2>
          <p>Handle emergency shift assignments</p>
          <button className="action-button">Manage Emergency</button>
        </div>
      </div>

      {/* Rectangular Card for Assign Shifts */}
      <div className="rectangular-card">
        <h2>Shift Scheduling Management</h2>
        <p>
          Admins can manage shifts for all staff members, assign shifts, and
          adjust schedules.
        </p>
        <button className="rectangular-action-button">Assign Shifts</button>
      </div>
    </div>
  );
};

export default StaffingPatterns;
