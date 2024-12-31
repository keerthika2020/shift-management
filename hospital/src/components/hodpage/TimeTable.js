import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./hodpagestyles/hodtimetable.css";
import Sidebar1 from "./Sidebar1";

const TimeTable = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [reminders, setReminders] = useState([]);
  const [reminderMessage, setReminderMessage] = useState("");
  const [reminderTime, setReminderTime] = useState("");
  const [alertMinutes, setAlertMinutes] = useState(10);
  const [isOnDuty, setIsOnDuty] = useState(true);
  const [shiftLog, setShiftLog] = useState([]);

  // Function to handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);

    const localDate = new Date(date);
    localDate.setHours(10, 0, 0, 0); // Default time
    const formattedDate = localDate.toISOString().slice(0, 16);
    setReminderTime(formattedDate);
  };

  // Function to add reminder
  const handleAddReminder = () => {
    const reminder = {
      date: selectedDate.toDateString(),
      time: reminderTime,
      message: reminderMessage,
      alertMinutes,
    };

    setReminders((prevReminders) => [...prevReminders, reminder]);
    

    alert("Reminder added successfully!");
    setReminderMessage("");
    setReminderTime("10:00");
    setAlertMinutes(10);
  };

  // Check if the selected date has a reminder
  const isDateWithReminder = (date) =>
    reminders.some((reminder) => reminder.date === date.toDateString());

  // Handle toggle button
  const handleToggleShift = () => {
    const currentStatus = isOnDuty ? "Off Duty" : "On Duty";
    const timestamp = new Date().toLocaleString();

    setIsOnDuty(!isOnDuty);
    setShiftLog((prevLog) => [
      ...prevLog,
      { status: currentStatus, timestamp: timestamp },
    ]);
  };

  // Render reminders for the selected date
  const remindersForSelectedDate = reminders.filter(
    (reminder) => reminder.date === selectedDate.toDateString()
  );

  return (
    <div className="container_hodtimetable">
      <Sidebar1 />

      <div className="main_hodtimetable">
        <h1 className="header_hodtimetable" style={{color:"#0F6A6B",textAlign:"center" ,  }}>Schedules</h1>

        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          tileContent={({ date }) =>
            isDateWithReminder(date) ? (
              <div className="reminder-icon_hodtimetable">&bull;</div>
            ) : null
          }
        />

        <div className="reminder-section_hodtimetable">
          <h2 className="subheader_hodtimetable" style={{color:"#0F6A6B" }}>Set Reminder</h2>

          <div className="form-group_hodtimetable">
            <label className="label_hodtimetable">Message:</label>
            <textarea
              value={reminderMessage}
              rows="3"
              onChange={(e) => setReminderMessage(e.target.value)}
              className="textarea_hodtimetable"
            />
          </div>

          <div className="form-group_hodtimetable">
            <label className="label_hodtimetable">Select Date & Time:</label>
            <input
              type="datetime-local"
              value={reminderTime}
              onChange={(e) => setReminderTime(e.target.value)}
              className="input_hodtimetable"
            />
          </div>

          <div className="form-group_hodtimetable">
            <label className="label_hodtimetable">Alert Before (minutes):</label>
            <input
              type="number"
              value={alertMinutes}
              onChange={(e) => setAlertMinutes(e.target.value)}
              className="input_hodtimetable"
            />
          </div>

          <button onClick={handleAddReminder} className="btn_hodtimetable">
            Set Reminder
          </button>
        </div>
        
        <div className="reminders-list_hodtimetable">
          <h3 className="reminders-header_hodtimetable">
            Reminders for {selectedDate.toDateString()}
          </h3>
          <ul className="reminders-ul_hodtimetable">
            {remindersForSelectedDate.map((reminder, index) => (
              <li key={index} className="reminder-item_hodtimetable">
                <strong className="reminder-time_hodtimetable">
                  {reminder.time}:
                </strong>
                <span className="reminder-message_hodtimetable">
                  {reminder.message}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="onoff-container">
      <h2 className="onoff-title">Inform On/Off Duty</h2>
      <div
        className={`toggle-switch ${isOnDuty ? "on" : "off"}`}
        onClick={handleToggleShift}
      >
        <div className="toggle-thumb">{isOnDuty ? "ON" : "OFF"}</div>
      </div>
    </div>

        <div className="shift-log_hodtimetable">
          <h3 className="shift-log-header_hodtimetable" style={{color:"#0F6A6B" }}>Shift Log</h3>
          <ul className="shift-log-ul_hodtimetable">
            {shiftLog.map((log, index) => (
              <li key={index} className="shift-log-item_hodtimetable">
                {log.status} at {log.timestamp}
              </li>
            ))}
          </ul>
        </div>
           {/* Calendar Styles */}
 <style>
 {`
   .react-calendar {
     width: 100%;
     max-width: 600px;
     margin: 0 auto;
     background:rgb(59, 171, 171);
     border-radius: 10px;
     padding: 10px;
     color: white;
     box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
   }

     /* Change the color of the numbers to black */
   .react-calendar__tile {
     color: black !important;
     padding: 15px;
     text-align: center;
     background: none;
     border: none;
   }

   /* Hover effect for tiles */
   .react-calendar__tile:hover {
     background: rgba(255, 165, 38, 0.3); /* Light orange background on hover */
     
     cursor: pointer;
   }

   .react-calendar__tile--now {
     background: #FFA726;
     border-radius: 50%;
     color: white;
     width: 80px;
     height: 74px;
     display: flex;
     justify-content: center;
     align-items: center;
   }

   .reminder-date {
     background:rgb(243, 92, 89) !important;
     color: white !important;
     border-radius: 50% !important;
   }
 `}
</style>
       
    
      </div>
    </div>
  );
};

export default TimeTable;

       

 
                 