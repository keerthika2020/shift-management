import React, { useState } from 'react';
import Sidebar1 from './Sidebar1'; // Import the Sidebar component
import './hodpagestyles/hodshiftmanagement.css'



const ShiftManagement = () => {
    const [shiftRequests, setShiftRequests] = useState([
      { id: 1, name: 'John Doe', currentShift: { date: '2024-12-01', time: '08:00 AM' }, 
      requestedShift: { date: '2024-12-05', time: '06:00 PM' },  workload: 40, status: 'Pending' },
      { id: 2, name: 'Jane Smith',currentShift: { date: '2024-12-03', time: '09:00 PM' }, 
      requestedShift: { date: '2024-12-07', time: '07:00 AM' },  workload: 38, status: 'Pending' },
    ]);
  
    const [approvedShifts, setApprovedShifts] = useState([]);
    const [staffSchedules, setStaffSchedules] = useState([
      {
        name: 'John Doe',
        schedules: [
          { week: 'Week 1', shifts: ['Monday: 08:00 AM - 04:00 PM', 'Tuesday: 08:00 AM - 04:00 PM', 'Wednesday: 10:00 AM - 06:00 PM', 'Thursday: 12:00 PM - 08:00 PM', 'Friday: 02:00 PM - 10:00 PM', 'Saturday: OFF', 'Sunday: OFF'] },
          { week: 'Week 2', shifts: ['Monday: 06:00 PM - 02:00 AM', 'Tuesday: 08:00 AM - 04:00 PM', 'Wednesday: OFF', 'Thursday: 08:00 AM - 04:00 PM', 'Friday: 10:00 AM - 06:00 PM', 'Saturday: 04:00 PM - 12:00 AM', 'Sunday: OFF'] },
          { week: 'Week 3', shifts: ['Monday: 08:00 AM - 04:00 PM', 'Tuesday: 09:00 AM - 05:00 PM', 'Wednesday: 07:00 AM - 03:00 PM', 'Thursday: 11:00 AM - 07:00 PM', 'Friday: OFF', 'Saturday: 10:00 AM - 06:00 PM', 'Sunday: OFF'] },
          { week: 'Week 4', shifts: ['Monday: 06:00 PM - 02:00 AM', 'Tuesday: 08:00 AM - 04:00 PM', 'Wednesday: 03:00 PM - 11:00 PM', 'Thursday: 07:00 AM - 03:00 PM', 'Friday: OFF', 'Saturday: OFF', 'Sunday: 10:00 AM - 06:00 PM'] },
          { week: 'Week 5', shifts: ['Monday: 08:00 AM - 04:00 PM', 'Tuesday: 12:00 PM - 08:00 PM', 'Wednesday: 08:00 AM - 04:00 PM', 'Thursday: OFF', 'Friday: 06:00 PM - 02:00 AM', 'Saturday: OFF', 'Sunday: 07:00 AM - 03:00 PM'] },
        ],
      },
      {
        name: 'Jane Smith',
        schedules: [
          { week: 'Week 1', shifts: ['Monday: 07:00 AM - 03:00 PM', 'Tuesday: 07:00 AM - 03:00 PM', 'Wednesday: 10:00 AM - 06:00 PM', 'Thursday: OFF', 'Friday: OFF', 'Saturday: 09:00 AM - 05:00 PM', 'Sunday: 07:00 AM - 03:00 PM'] },
          { week: 'Week 2', shifts: ['Monday: 06:00 PM - 02:00 AM', 'Tuesday: 10:00 AM - 06:00 PM', 'Wednesday: 08:00 AM - 04:00 PM', 'Thursday: 07:00 AM - 03:00 PM', 'Friday: OFF', 'Saturday: OFF', 'Sunday: 08:00 AM - 04:00 PM'] },
          { week: 'Week 3', shifts: ['Monday: OFF', 'Tuesday: OFF', 'Wednesday: 07:00 AM - 03:00 PM', 'Thursday: 09:00 AM - 05:00 PM', 'Friday: 08:00 AM - 04:00 PM', 'Saturday: 10:00 AM - 06:00 PM', 'Sunday: 06:00 PM - 02:00 AM'] },
          { week: 'Week 4', shifts: ['Monday: OFF', 'Tuesday: 06:00 PM - 02:00 AM', 'Wednesday: 12:00 PM - 08:00 PM', 'Thursday: OFF', 'Friday: OFF', 'Saturday: 10:00 AM - 06:00 PM', 'Sunday: 07:00 AM - 03:00 PM'] },
          { week: 'Week 5', shifts: ['Monday: 08:00 AM - 04:00 PM', 'Tuesday: 10:00 AM - 06:00 PM', 'Wednesday: 07:00 AM - 03:00 PM', 'Thursday: OFF', 'Friday: OFF', 'Saturday: OFF', 'Sunday: 09:00 AM - 05:00 PM'] },
        ],
      },
      {
        name: 'Emily Davis',
        schedules: [
          { week: 'Week 1', shifts: ['Monday: 09:00 AM - 05:00 PM', 'Tuesday: OFF', 'Wednesday: 08:00 AM - 04:00 PM', 'Thursday: 10:00 AM - 06:00 PM', 'Friday: 12:00 PM - 08:00 PM', 'Saturday: 06:00 PM - 02:00 AM', 'Sunday: OFF'] },
          { week: 'Week 2', shifts: ['Monday: 06:00 PM - 02:00 AM', 'Tuesday: 10:00 AM - 06:00 PM', 'Wednesday: OFF', 'Thursday: OFF', 'Friday: 07:00 AM - 03:00 PM', 'Saturday: OFF', 'Sunday: 08:00 AM - 04:00 PM'] },
          { week: 'Week 3', shifts: ['Monday: 08:00 AM - 04:00 PM', 'Tuesday: 07:00 AM - 03:00 PM', 'Wednesday: OFF', 'Thursday: 09:00 AM - 05:00 PM', 'Friday: 06:00 PM - 02:00 AM', 'Saturday: 08:00 AM - 04:00 PM', 'Sunday: OFF'] },
          { week: 'Week 4', shifts: ['Monday: OFF', 'Tuesday: 10:00 AM - 06:00 PM', 'Wednesday: OFF', 'Thursday: 12:00 PM - 08:00 PM', 'Friday: 08:00 AM - 04:00 PM', 'Saturday: 08:00 AM - 04:00 PM', 'Sunday: 06:00 PM - 02:00 AM'] },
          { week: 'Week 5', shifts: ['Monday: OFF', 'Tuesday: 07:00 AM - 03:00 PM', 'Wednesday: 10:00 AM - 06:00 PM', 'Thursday: OFF', 'Friday: OFF', 'Saturday: OFF', 'Sunday: 12:00 PM - 08:00 PM'] },
        ],
      },
      {
        name: 'Michael Brown',
        schedules: [
          { week: 'Week 1', shifts: ['Monday: 10:00 AM - 06:00 PM', 'Tuesday: OFF', 'Wednesday: 07:00 AM - 03:00 PM', 'Thursday: 08:00 AM - 04:00 PM', 'Friday: 06:00 PM - 02:00 AM', 'Saturday: OFF', 'Sunday: 10:00 AM - 06:00 PM'] },
          { week: 'Week 2', shifts: ['Monday: OFF', 'Tuesday: 08:00 AM - 04:00 PM', 'Wednesday: 10:00 AM - 06:00 PM', 'Thursday: 12:00 PM - 08:00 PM', 'Friday: 08:00 AM - 04:00 PM', 'Saturday: OFF', 'Sunday: 06:00 PM - 02:00 AM'] },
          { week: 'Week 3', shifts: ['Monday: OFF', 'Tuesday: 07:00 AM - 03:00 PM', 'Wednesday: 10:00 AM - 06:00 PM', 'Thursday: OFF', 'Friday: OFF', 'Saturday: 12:00 PM - 08:00 PM', 'Sunday: OFF'] },
          { week: 'Week 4', shifts: ['Monday: 06:00 PM - 02:00 AM', 'Tuesday: 08:00 AM - 04:00 PM', 'Wednesday: 12:00 PM - 08:00 PM', 'Thursday: 08:00 AM - 04:00 PM', 'Friday: OFF', 'Saturday: OFF', 'Sunday: OFF'] },
          { week: 'Week 5', shifts: ['Monday: 08:00 AM - 04:00 PM', 'Tuesday: OFF', 'Wednesday: 06:00 PM - 02:00 AM', 'Thursday: 07:00 AM - 03:00 PM', 'Friday: 10:00 AM - 06:00 PM', 'Saturday: 08:00 AM - 04:00 PM', 'Sunday: OFF'] },
        ],
      },
    ]);
    
  
    const [shiftChangeLog, setShiftChangeLog] = useState([]);
    const [selectedStaff, setSelectedStaff] = useState(null);
    const [showChangeShiftPopup, setShowChangeShiftPopup] = useState(false);
    const [showViewDetailsPopup, setShowViewDetailsPopup] = useState(false);
    const [newShiftDetails, setNewShiftDetails] = useState({ day: '', date: '', time: '', shiftName: '' });
    const [viewDetails, setViewDetails] = useState([]);
    const [selectedWeek, setSelectedWeek] = useState('Week 1');
  
    const approveRequest = (id) => {
      const updatedRequests = shiftRequests.map((request) =>
        request.id === id
          ? { ...request, status: 'Approved', timestamp: new Date().toISOString() }
          : request
      );
      setShiftRequests(updatedRequests);
    
      const approvedRequest = updatedRequests.find((request) => request.id === id);
      setApprovedShifts([...approvedShifts, approvedRequest]);
    };
    
    const denyRequest = (id) => {
      const updatedRequests = shiftRequests.map((request) =>
        request.id === id
          ? { ...request, status: 'Denied', timestamp: new Date().toISOString() }
          : request
      );
      setShiftRequests(updatedRequests);
    };
    
  
    const handlePopupOpen = (staffName) => {
      setSelectedStaff(staffName);
      setShowChangeShiftPopup(true);
    };
  
    const handlePopupClose = () => {
      setShowChangeShiftPopup(false);
      setShowViewDetailsPopup(false);
    };
  
    const handleShiftChange = () => {
        const updatedSchedules = staffSchedules.map((staff) =>
          staff.name === selectedStaff
            ? {
                ...staff,
                schedules: staff.schedules.map((weekSchedule) =>
                  weekSchedule.week === selectedWeek
                    ? {
                        ...weekSchedule,
                        shifts: weekSchedule.shifts.map((shift) =>
                          shift.startsWith(newShiftDetails.day)
                            ? `${newShiftDetails.day}: ${newShiftDetails.time} - ${newShiftDetails.shiftName}`
                        : shift
                        ),
                      }
                    : weekSchedule
                ),
              }
            : staff
        );
      
        setStaffSchedules(updatedSchedules);
      
        setShiftChangeLog([
          ...shiftChangeLog,
          {
            staffName: selectedStaff,
            day: newShiftDetails.day,
            date: newShiftDetails.date,
            time: newShiftDetails.time,
            shiftName: newShiftDetails.shiftName,
            timestamp: new Date().toLocaleString(),
          },
        ]);
      
        setShowChangeShiftPopup(false);
      };
      
  
    const handleViewDetailsPopupOpen = (staffName, selectedWeek) => {
        // Find the staff by name
        const staff = staffSchedules.find((s) => s.name === staffName);
    
        if (staff) {
            // Find the schedule for the selected week
            const schedule = staff.schedules.find((s) => s.week === selectedWeek);
    
            if (schedule && schedule.shifts) {
                setViewDetails(schedule.shifts); // Set the shifts to display
                setShowViewDetailsPopup(true); // Open the popup
            } else {
                console.error(`Shifts not found for week: ${selectedWeek}`);
                setViewDetails([]); // Clear the details
            }
        } else {
            console.error(`Staff not found: ${staffName}`);
            setViewDetails([]); // Clear the details
        }
    };
    
  
    
    return (
      <div className="hodshiftmanagement-container">
        <div className="hodshiftmanagement-sidebar">
          <Sidebar1 />
        </div>
  
        <div className="hodshiftmanagement-main">
          <h1 className="hodshiftmanagement-title">Shift Management</h1>
  
          <section className="hodshiftmanagement-section">
            <h2 className="hodshiftmanagement-subtitle">Requested Shift Changes</h2>
            <table className="hodshiftmanagement-table">
              <thead>
                <tr>
                  <th>Staff Name</th>
                  <th>Current Shift</th>
                  <th>Requested Shift</th>
                  <th>Workload (hrs/week)</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {shiftRequests.map((request) => (
                  <tr key={request.id}>
                    <td>{request.name}</td>
                    <td>{`${request.currentShift.date} ${request.currentShift.time}`}</td>
                  <td>{`${request.requestedShift.date} ${request.requestedShift.time}`}</td>
                  <td>{request.workload}</td>
                    <td>
                      {request.status === 'Pending' && (
                        <div className="hodshiftmanagement-button-container">
                          <button
                            className="approvebtn_hodshiftmanagement"
                            onClick={() => approveRequest(request.id)}
                          >
                            Approve
                          </button>
                          <button
                            className="denybtn_hodshiftmanagement"
                            onClick={() => denyRequest(request.id)}
                          >
                            Deny
                          </button>
                        </div>
                      )}
                      {request.status === 'Approved' && (
                        <button className="approvedbtn_hodshiftmanagement" disabled>
                          Approved
                        </button>
                      )}
                      {request.status === 'Denied' && (
                        <button className="deniedbtn_hodshiftmanagement" disabled>
                          Denied
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
  
          <section className="hodshiftmanagement-section">
  <h2 className="hodshiftmanagement-subtitle">Approved Shift Changes</h2>
  <table className="hodshiftmanagement-table">
    <thead>
      <tr>
        <th>Staff Name</th>
        <th>Old Shift (Date & Time)</th>
         <th>New Shift (Date & Time)</th>
        <th>Workload (hrs/week)</th>
        <th>Approval Timestamp</th> {/* Add the timestamp column */}
      </tr>
    </thead>
    <tbody>
      {approvedShifts.map((shift) => (
        <tr key={shift.id}>
          <td>{shift.name}</td>
          <td>{`${shift.currentShift.date} ${shift.currentShift.time}`}</td>
          <td>{`${shift.requestedShift.date} ${shift.requestedShift.time}`}</td>
           <td>{shift.workload}</td>
          <td>{shift.timestamp ? new Date(shift.timestamp).toLocaleString() : "N/A"}</td> {/* Display the timestamp */}
        </tr>
      ))}
    </tbody>
  </table>
</section>

  
          <section className="hodshiftmanagement-section">
            <h2 className="hodshiftmanagement-subtitle">Staff Weekly Shift Schedules</h2>
            <table className="hodshiftmanagement-table">
              <thead>
                <tr>
                  <th>Staff Name</th>
                  <th>Week</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {staffSchedules.map((staff, index) => (
                  <tr key={index}>
                    <td>{staff.name}</td>
                    <td>
                      <select
                        value={selectedWeek}
                        onChange={(e) => setSelectedWeek(e.target.value)}
                        className="hodshiftmanagement-select"
                      >
                        <option value="Week 1">Week 1</option>
                        <option value="Week 2">Week 2</option>
                        <option value="Week 3">Week 3</option>
                        <option value="Week 4">Week 4</option>
                        <option value="Week 5">Week 5</option>
                      </select>
                    </td>
                    <td>
                      <button
                        className="changebtn_hodshiftmanagement"
                        onClick={() => handlePopupOpen(staff.name)}
                      >
                        Change Shift
                      </button>
                      <button
                        className="viewdetailsbtn_hodshiftmanagement"
                        onClick={() => handleViewDetailsPopupOpen(staff.name, selectedWeek)}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
  
          {showChangeShiftPopup && (
            <div>
              <div className="hodshiftmanagement-overlay" onClick={handlePopupClose}></div>
              <div className="hodshiftmanagement-popup">
                <h3>Change Shift for {selectedStaff}</h3>
                <div>
                  <label>Day:</label>
                  <input
                    type="text"
                    value={newShiftDetails.day}
                    onChange={(e) => setNewShiftDetails({ ...newShiftDetails, day: e.target.value })}
                  />
                </div>
                <div>
                  <label>Date:</label>
                  <input
                    type="date"
                    onChange={(e) => setNewShiftDetails({ ...newShiftDetails, date: e.target.value })}
                  />
                </div>
                <div>
                  <label>Time:</label>
                  <input
                    type="time"
                    onChange={(e) => setNewShiftDetails({ ...newShiftDetails, time: e.target.value })}
                  />
                </div>
                <div>
                  <label>Shift Name:</label>
                  <input
                    type="text"
                    onChange={(e) => setNewShiftDetails({ ...newShiftDetails, shiftName: e.target.value })}
                  />
                </div>
                <div>
                  <button
                    className="cancelbtn_hodshiftmanagement"
                    onClick={handlePopupClose}
                  >
                    Cancel
                  </button>
                  <button
                    className="allotbtn_hodshiftmanagement"
                    onClick={handleShiftChange}
                  >
                    Allot
                  </button>
                </div>
              </div>
            </div>
          )}
  
          {showViewDetailsPopup && (
            <div>
              <div
                className="hodshiftmanagement-overlay"
                onClick={() => setShowViewDetailsPopup(false)}
              ></div>
              <div className="hodshiftmanagement-popup">
                <h3>Shift Details</h3>
                {viewDetails && viewDetails.length > 0 ? (
                  <ul>
                    {viewDetails.map((shift, index) => (
                      <li key={index}>{shift}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No shift details available for the selected staff member.</p>
                )}
                <button
                  className="closebtn_hodshiftmanagement"
                  onClick={() => setShowViewDetailsPopup(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
  
          <section className="hodshiftmanagement-section">
            <h2 className="hodshiftmanagement-subtitle">Shift Change Log</h2>
            <table className="hodshiftmanagement-table">
              <thead>
                <tr>
                  <th>Staff Name</th>
                  <th>Day</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>New Shift</th>
                  <th>Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {shiftChangeLog.map((log, index) => (
                  <tr key={index}>
                    <td>{log.staffName}</td>
                    <td>{log.day}</td>
                    <td>{log.date}</td>
                    <td>{log.time}</td>
                    <td>{log.shiftName}</td>
                    <td>{log.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    );
  };
  
  export default ShiftManagement;