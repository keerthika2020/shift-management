import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar1'; // Import the Sidebar component
import './hodpagestyles/hodstaffavailability.css';

const StaffAvailability = () => {
    const [staffData, setStaffData] = useState([
      { name: 'John Doe', role: 'Nurse', department: 'Cardiology', shifts: [1, 1, 1, 0, 1, 0, 1], availability: 'Off-Shift', notified: false, leaveStatus: 'Pending',fromTo: '2024-11-30 to 2024-12-31' },
      { name: 'Jane Smith', role: 'Technician', department: 'Cardiology', shifts: [0, 1, 1, 1, 1, 1, 0], availability: 'Off-Shift', notified: false, leaveStatus: 'Pending' ,fromTo: '2024-12-05 to 2024-12-31'},
      { name: 'Emily Brown', role: 'Doctor', department: 'Cardiology', shifts: [1, 0, 1, 1, 1, 1, 0], availability: 'Off-Shift', notified: false, leaveStatus: 'Pending' ,fromTo: '2024-12-30 to 2024-12-31'},
      { name: 'Michael Davis', role: 'Nurse', department: 'Cardiology', shifts: [1, 1, 1, 1, 1, 1, 1], availability: 'On-Shift', notified: false, leaveStatus: 'Pending' ,fromTo: '2024-12-30 to 2024-12-31'},
      { name: 'Sarah Johnson', role: 'Nurse', department: 'Cardiology', shifts: [0, 1, 1, 1, 1, 0, 0], availability: 'Off-Shift', notified: false, leaveStatus: 'Pending' ,fromTo: '2024-12-30 to 2024-12-31' },
    ]);
  
    const [availableStaffCount, setAvailableStaffCount] = useState(0);
    const [approvedLogs, setApprovedLogs] = useState([]);
    const [rejectedLogs, setRejectedLogs] = useState([]);
    const [filters, setFilters] = useState({ department: '', role: '', availability: '' });
  
    const [originalStaffData, setOriginalStaffData] = useState([]);
    const [showModal, setShowModal] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedDateTime, setSelectedDateTime] = useState('');

    useEffect(() => {
      const data = [
        { name: 'John Doe', role: 'Nurse', department: 'Cardiology', shifts: [1, 1, 1, 0, 1, 0, 1], availability: 'Off-Shift', notified: false, leaveStatus: 'Pending',fromTo: '2024-12-30 to 2024-12-31' },
        { name: 'Jane Smith', role: 'Technician', department: 'Cardiology', shifts: [0, 1, 1, 1, 1, 1, 0], availability: 'Off-Shift', notified: false, leaveStatus: 'Pending' ,fromTo: '2024-12-30 to 2024-12-31'},
        { name: 'Emily Brown', role: 'Doctor', department: 'Cardiology', shifts: [1, 0, 1, 1, 1, 1, 0], availability: 'Off-Shift', notified: false, leaveStatus: 'Pending' ,fromTo: '2024-12-30 to 2024-12-31'},
        { name: 'Michael Davis', role: 'Nurse', department: 'Cardiology', shifts: [1, 1, 1, 1, 1, 1, 1], availability: 'On-Shift', notified: false, leaveStatus: 'Pending' ,fromTo: '2024-12-30 to 2024-12-31'},
        { name: 'Sarah Johnson', role: 'Nurse', department: 'Cardiology', shifts: [0, 1, 1, 1, 1, 0, 0], availability: 'Off-Shift', notified: false, leaveStatus: 'Pending',fromTo: '2024-12-30 to 2024-12-31' },
      ];
      setStaffData(data);
      setOriginalStaffData(data);
      
    }, []);
  
    useEffect(() => {
      calculateAvailableStaff();
    }, [staffData]);

    const calculateAvailableStaff = () => {
      const count = staffData.filter((staff) => staff.availability === 'Off-Shift').length;
      setAvailableStaffCount(count);
    };
  
    const openModal = (staff) => {
      setSelectedStaff(staff);
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
      setSelectedStaff(null);
      setSelectedDay('');
      setSelectedDateTime('');
    };
  
    const handleSchedule = () => {
      if (!selectedDay || !selectedDateTime) {
        alert('Please select both day and time.');
        return;
      }
  
      const dayIndex = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].indexOf(selectedDay);
  
      if (dayIndex === -1) {
        alert('Invalid day selected.');
        return;
      }

      setStaffData((prevData) =>
      prevData.map((staff) => {
        if (staff.name === selectedStaff.name) {
          const updatedShifts = staff.shifts.map((shift, index) => (index === dayIndex ? 1 : shift));
          const isFullyScheduled = updatedShifts.every((shift) => shift === 1);

          return {
            ...staff,
            shifts: updatedShifts,
            availability: isFullyScheduled ? 'On-Shift' : staff.availability,
            notified: true,
          };
        }
        return staff;
      })
    );

    setShowModal(false);
    alert(`Shift scheduled for ${selectedStaff.name} on ${selectedDay}, ${selectedDateTime}.`);
  };
    const applyFilters = () => {
      let filteredData = [...originalStaffData];
    
      // Apply filters only to pending requests
      filteredData = filteredData.filter(staff => staff.leaveStatus === 'Pending');
    
      // Apply department filter if set
      if (filters.department) {
        filteredData = filteredData.filter(staff => staff.department === filters.department);
      }
      // Apply role filter if set
      if (filters.role) {
        filteredData = filteredData.filter(staff => staff.role === filters.role);
      }
      // Apply availability filter if set
      if (filters.availability) {
        filteredData = filteredData.filter(staff => staff.availability === filters.availability);
      }
    
      setStaffData(filteredData);
    };
    
    const resetFilters = () => {
      // Filter out approved and rejected leave statuses before resetting
      const pendingRequests = originalStaffData.filter(staff => staff.leaveStatus === 'Pending');
      setStaffData(pendingRequests);
      setFilters({ department: '', role: '', availability: '' });
    };
    

  
    const scheduleShift = (name) => {
      setStaffData(prevData =>
        prevData.map(staff =>
          staff.name === name ? { ...staff, notified: true } : staff
        )
      );
      alert(`Shift scheduled for ${name}.`);
    };
  
    const approveLeave = (name) => {
  setStaffData((prevData) => {
    return prevData.map((staff) => {
      if (staff.name === name) {
        // Update the status to 'Approved'
        return { ...staff, leaveStatus: 'Approved' };
      }
      return staff; // Return other staff data unchanged
    });
  });

  // Find the approved staff and log the approved leave
  const approvedStaff = staffData.find(staff => staff.name === name);
  if (approvedStaff) {
    setApprovedLogs((prevLogs) => [...prevLogs, approvedStaff]);
  }

  alert(`${name}'s leave request approved.`);
};

const rejectLeave = (name) => {
  setStaffData((prevData) => {
    return prevData.map((staff) => {
      if (staff.name === name) {
        // Update the status to 'Rejected'
        return { ...staff, leaveStatus: 'Rejected' };
      }
      return staff; // Return other staff data unchanged
    });
  });

  // Find the rejected staff and log the rejected leave
  const rejectedStaff = staffData.find(staff => staff.name === name);
  if (rejectedStaff) {
    setRejectedLogs((prevLogs) => [...prevLogs, rejectedStaff]);
  }

  alert(`${name}'s leave request rejected.`);
};

return (
  <div className="container_hodstaffavailability">
    {/* Sidebar */}
    <Sidebar />

    {/* Main Content */}
    <div className="main-content_hodstaffavailability">
      <h1 className="section-title_hodstaffavailability">Staff Availability</h1>

      {/* Filters Section */}
      <section className="filters_hodstaffavailability">
        <h2 className="section-title_hodstaffavailability">Filters</h2>

        <form
          className="filters-form_hodstaffavailability"
          onSubmit={(e) => {
            e.preventDefault();
            applyFilters();
          }}
        >
          <div className="filter_hodstaffavailability">
            <label htmlFor="department" className="label_hodstaffavailability">Department:</label>
            <select
              id="department"
              value={filters.department}
              onChange={(e) => setFilters({ ...filters, department: e.target.value })}
              className="select_hodstaffavailability"
            >
              <option value="">All</option>
              <option value="Surgery">Surgery</option>
              <option value="Radiology">Radiology</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="ICU">ICU</option>
              <option value="Cardiology">Cardiology</option>
            </select>
          </div>

          <div className="filter_hodstaffavailability">
            <label htmlFor="role" className="label_hodstaffavailability">Role:</label>
            <select
              id="role"
              value={filters.role}
              onChange={(e) => setFilters({ ...filters, role: e.target.value })}
              className="select_hodstaffavailability"
            >
              <option value="">All</option>
              <option value="Doctor">Doctor</option>
              <option value="Nurse">Nurse</option>
              <option value="Technician">Technician</option>
            </select>
          </div>

          <div className="filter_hodstaffavailability">
            <label htmlFor="availability" className="label_hodstaffavailability">Availability:</label>
            <select
              id="availability"
              value={filters.availability}
              onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
              className="select_hodstaffavailability"
            >
              <option value="">All</option>
              <option value="On-Shift">On-Shift</option>
              <option value="Off-Shift">Off-Shift</option>
              <option value="On Leave">On Leave</option>
            </select>
          </div>

          <button type="submit" className="apply-filters-btn_hodstaffavailability">
            Apply 
          </button>
          <button type="button" onClick={resetFilters} className="reset-filters-btn_hodstaffavailability">
            Reset 
          </button>
        </form>
      </section>

      {/* Leave Requests Section */}
      <h2 className="section-title_hodstaffavailability">Leave Requests</h2>
      <section className="leave-requests_hodstaffavailability">
        <div className="table-container_hodstaffavailability">
          <table className="staff-table_hodstaffavailability">
            <thead className="table-header_hodstaffavailability">
              <tr  >
                <th>Staff Name</th>
                <th>Role</th>
                <th>Department</th>
                <th>Leave Type</th>
                <th>From-To</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {staffData.filter(staff => staff.leaveStatus === 'Pending').map((staff, index) => (
                <tr key={index} className={index % 2 === 0 ? 'even-row_hodstaffavailability' : 'odd-row_hodstaffavailability'}>
                  <td>{staff.name}</td>
                  <td>{staff.role}</td>
                  <td>{staff.department}</td>
                  <td>Medical</td>
                  <td>{staff.fromTo}</td>
                  <td>{staff.leaveStatus}</td>
                  <td className="button-container_hodstaffavailability">
                    <button onClick={() => approveLeave(staff.name)} className="approve-btn_hodstaffavailability">
                      Approve
                    </button>
                    <button onClick={() => rejectLeave(staff.name)} className="reject-btn_hodstaffavailability">
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Staff Availability Table */}
      <div className="staff-availability_hodstaffavailability">
        <h2 className="section-title_hodstaffavailability">Available Staff</h2>
        <section className="staff-table-container_hodstaffavailability">
          <p style={{marginRight:"800px"}}><strong >Total Available Staff:</strong> {availableStaffCount}</p>
          <div className="table-container_hodstaffavailability">
            <table className="staff-table_hodstaffavailability">
              <thead>
                <tr className="table-header_hodstaffavailability">
                  <th>Staff Name</th>
                  <th>Role</th>
                  <th>Department</th>
                  <th>Shifts Taken</th>
                  <th>Weekly Work %</th>
                  <th>Availability</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {staffData.map((staff, index) => {
                  const totalShifts = staff.shifts.reduce((a, b) => a + b, 0);
                  const workPercentage = ((totalShifts / 7) * 100).toFixed(2);

                  return (
                    <tr key={index} className={index % 2 === 0 ? 'even-row_hodstaffavailability' : 'odd-row_hodstaffavailability'}>
                      <td>{staff.name}</td>
                      <td>{staff.role}</td>
                      <td>{staff.department}</td>
                      <td>
                        {staff.shifts.map((shift, i) => (
                          <div key={i} className="shift-details_hodstaffavailability">
                            <span>{['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][i]}:</span>
                            <span>{shift ? 'Shift Taken' : 'No Shift'}</span>
                          </div>
                        ))}
                      </td>
                      <td>{workPercentage}%</td>
                      <td>{staff.availability}</td>
                      <td>
                        {staff.availability === 'Off-Shift' ? (
                          <button onClick={() => openModal(staff)} className="schedule-shift-btn_hodstaffavailability">
                            Schedule for Shift
                          </button>
                        ) : (
                          <span className="scheduled-hodstaffavailability">Scheduled</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Modal for scheduling */}
        {showModal && (
          <div className="modal_hodstaffavailability">
            <h3>Schedule Shift</h3>
            <div>
              <label for="selectDay">Select Day:</label>
              <select  id="selectDay" value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
                <option value=""> Day</option>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Select Date and Time:</label>
              <input
                type="datetime-local"
                value={selectedDateTime}
                onChange={(e) => setSelectedDateTime(e.target.value)}
              />
            </div>
            <div className="modal-actions_hodstaffavailability">
              <button onClick={closeModal} className="cancel-btn_hodstaffavailability">Cancel</button>
              <button onClick={handleSchedule} className="schedule-btn_hodstaffavailability">Schedule</button>
            </div>
          </div>
        )}

        {/* Overlay for modal */}
        {showModal && <div className="modal-overlay_hodstaffavailability" />}
      </div>

      {/* Approved Logs Section */}
      <h2 className="section-title_hodstaffavailability">Approved Logs</h2>
      <div className="logs-container_hodstaffavailability">
        {approvedLogs.length > 0 ? (
          <ul>
            {approvedLogs.map((log, index) => (
              <li key={index}><strong>{log.name}</strong> ({log.role}, {log.department})</li>
            ))}
          </ul>
        ) : (
          <p>No approved leave requests yet.</p>
        )}
      </div>

      {/* Rejected Logs Section */}
      <h2 className="section-title_hodstaffavailability">Rejected Logs</h2>
      <div className="logs-container_hodstaffavailability">
        {rejectedLogs.length > 0 ? (
          <ul>
            {rejectedLogs.map((log, index) => (
              <li key={index}><strong>{log.name}</strong> ({log.role}, {log.department})</li>
            ))}
          </ul>
        ) : (
          <p>No rejected leave requests yet.</p>
        )}
      </div>
    </div>
  </div>
);
};

export default StaffAvailability;