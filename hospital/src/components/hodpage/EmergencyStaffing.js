import React, { useState, useEffect } from 'react';
import Sidebar1 from './Sidebar1'; // Import your existing Sidebar component
import './hodpagestyles/hodemergencystaffing.css';

const EmergencyStaffing = () => {
  const [staffData, setStaffData] = useState([
    { name: 'John Doe', role: 'Nurse', department: 'Surgery', availability: 'Off-Shift', notified: false },
    { name: 'Jane Smith', role: 'Technician', department: 'Cardiology', availability: 'Off-Shift', notified: false },
    { name: 'Emily Brown', role: 'Doctor', department: 'Cardiology', availability: 'Off-Shift', notified: false },
    { name: 'Michael Davis', role: 'Nurse', department: 'ICU', availability: 'On-Shift', notified: false },
    { name: 'Sarah Johnson', role: 'Nurse', department: 'Cardiology', availability: 'Off-Shift', notified: false }
  ]);

  const [emergencyLog, setEmergencyLog] = useState([]);

  // Calculate total available staff
  const populateStaffTable = () => {
    return staffData.filter(staff => staff.availability === 'Off-Shift' && !staff.notified).length;
  };

  // Notify a specific staff member
  const notifyStaff = (name) => {
    const updatedStaffData = staffData.map(staff => {
      if (staff.name === name && staff.availability === 'Off-Shift' && !staff.notified) {
        return {
          ...staff,
          notified: true,
          availability: 'On-Shift' // Change availability to 'On-Shift'
        };
      }
      return staff;
    });

    setStaffData(updatedStaffData);

    // Log the emergency action
    logEmergencyAction(name, 'Notified for emergency deployment');
  };

  // Log emergency staffing actions
  const logEmergencyAction = (staffName, action) => {
    const date = new Date().toLocaleString(); // Get current date and time
    const newLogEntry = { date, staffName, action, status: 'Completed' };
    setEmergencyLog([...emergencyLog, newLogEntry]);
  };

  useEffect(() => {
    // Update staff count when staffData changes
    populateStaffTable();
  }, [staffData]);

  return (
    <div className="container_hodemergencystaffing">
      {/* Sidebar */}
      <div className="sidebarWrapper_hodemergencystaffing">
        <Sidebar1 />
      </div>

      {/* Main Content */}
      <div className="mainContent_hodemergencystaffing">
        <h1 className="heading_hodemergencystaffing">Emergency Staffing Needs</h1>

        {/* Emergency Action Buttons */}
        <section className="actionsSection_hodemergencystaffing">
          <h2 className="subheading_hodemergencystaffing">Actions</h2>
          <p className="description_hodemergencystaffing">Quickly notify staff for critical situations:</p>
          <div className="buttonGroup_hodemergencystaffing">
            <button
              className="notifyButton_hodemergencystaffing"
              onClick={() => alert('Emergency notification sent for Surgery')}
            >
              Notify for Surgery
            </button>
            <button
              className="notifyButton_hodemergencystaffing"
              onClick={() => alert('Emergency notification sent for ICU')}
            >
              Notify for ICU
            </button>
            <button
              className="notifyButton_hodemergencystaffing"
              onClick={() => alert('Emergency notification sent for General Emergency')}
            >
              Notify for General Emergency
            </button>
          </div>
        </section>

        {/* Staff Availability */}
        <section className="staffSection_hodemergencystaffing">
          <h2 className="subheading_hodemergencystaffing">Available Staff</h2>
          <p className="description_hodemergencystaffing">
            <strong>Total Available Staff:</strong> <span>{populateStaffTable()}</span>
          </p>
          <table className="staffTable_hodemergencystaffing">
            <thead>
              <tr>
                <th>Staff Name</th>
                <th>Role</th>
                <th>Department</th>
                <th>Availability</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {staffData.map((staff, index) => (
                <tr key={index} className={index % 2 === 0 ? 'evenRow_hodemergencystaffing' : 'oddRow_hodemergencystaffing'}>
                  <td>{staff.name}</td>
                  <td>{staff.role}</td>
                  <td>{staff.department}</td>
                  <td>{staff.availability}</td>
                  <td>
                    {staff.availability === 'Off-Shift' && !staff.notified ? (
                      <button
                        className="approveButton_hodemergencystaffing"
                        onClick={() => notifyStaff(staff.name)}
                      >
                        Notify
                      </button>
                    ) : (
                      'Notified'
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Emergency Log */}
        <section className="logSection_hodemergencystaffing">
          <h2 className="subheading_hodemergencystaffing">Emergency Log</h2>
          <p className="description_hodemergencystaffing">Log of emergency staffing actions:</p>
          <table className="logTable_hodemergencystaffing">
            <thead>
              <tr>
                <th>Date</th>
                <th>Staff Name</th>
                <th>Action</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {emergencyLog.map((log, index) => (
                <tr key={index} className={index % 2 === 0 ? 'evenRow_hodemergencystaffing' : 'oddRow_hodemergencystaffing'}>
                  <td>{log.date}</td>
                  <td>{log.staffName}</td>
                  <td>{log.action}</td>
                  <td>{log.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default EmergencyStaffing;