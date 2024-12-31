import React, { useState } from "react";
import "./HelpSupport.css";

const HelpSupport = () => {
  const [activeTab, setActiveTab] = useState("complaint");
  const [messages, setMessages] = useState({
    complaint: [
      {
        id: 1,
        staff: "Dr. Alice",
        subject: "Shift Scheduling Issue",
        message: "There seems to be a conflict in the shift schedules for the nursing staff. I need assistance resolving this.",
        email: "alice@hospital.com",
        date: "2024-12-27",
        time: "10:30 AM",
      },
      {
        id: 2,
        staff: "Nurse Bob",
        subject: "Overlapping Shifts",
        message: "I received an alert about an overlapping shift with another nurse. Please help me resolve this.",
        email: "bob@hospital.com",
        date: "2024-12-28",
        time: "02:15 PM",
      },
      {
        id: 3,
        staff: "Admin Charlie",
        subject: "Shift Data Error",
        message: "I encountered an issue with the shift data not updating correctly. Need assistance with troubleshooting.",
        email: "charlie@hospital.com",
        date: "2024-12-29",
        time: "03:45 PM",
      },
      {
        id: 4,
        staff: "HR David",
        subject: "Staff Availability Mismatch",
        message: "The system is showing an incorrect staff availability report. Please assist in rectifying the data.",
        email: "david@hospital.com",
        date: "2024-12-30",
        time: "11:00 AM",
      },
    ],
    enquiry: [
      {
        id: 5,
        staff: "Nurse Eve",
        subject: "Shift Policy Clarification",
        message: "Can you please clarify the hospital's shift policy for weekend coverage?",
        email: "eve@hospital.com",
        date: "2024-12-26",
        time: "11:00 AM",
      },
      {
        id: 6,
        staff: "Admin Frank",
        subject: "Admin Portal Access",
        message: "I am unable to access the admin portal. Please assist in resolving this access issue.",
        email: "frank@hospital.com",
        date: "2024-12-27",
        time: "02:30 PM",
      },
      {
        id: 7,
        staff: "Dr. Grace",
        subject: "Shift Coverage Inquiry",
        message: "How do I check the coverage of shifts for the entire week?",
        email: "grace@hospital.com",
        date: "2024-12-28",
        time: "04:15 PM",
      },
      {
        id: 8,
        staff: "HR Hank",
        subject: "Shift Report Generation",
        message: "Can you provide guidance on generating shift reports for the department?",
        email: "hank@hospital.com",
        date: "2024-12-29",
        time: "01:00 PM",
      },
    ],
  });

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyData, setReplyData] = useState({
    from: "",
    to: "",
    replyMessage: "",
    attachment: null,
  });

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setSelectedMessage(null); // Reset selected message when switching tabs
  };

  const handleReply = (message) => {
    setSelectedMessage(message);
    setReplyData({
      from: "admin@hospital.com", // Change to your admin email
      to: message.email,
      replyMessage: "",
      attachment: null,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setReplyData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you'd typically handle sending the email and attachment.
    console.log("Sending email with the following data:", replyData);
    alert("Reply sent successfully!");
    // Clear the form after submitting
    setReplyData({
      from: "",
      to: "",
      replyMessage: "",
      attachment: null,
    });
  };

  return (
    <div className="help-support-container">
      <h1>Help and Support</h1>
      <div className="tab-buttons">
        <button
          onClick={() => handleTabSwitch("complaint")}
          className={activeTab === "complaint" ? "active" : ""}
        >
          Complaints
        </button>
        <button
          onClick={() => handleTabSwitch("enquiry")}
          className={activeTab === "enquiry" ? "active" : ""}
        >
          Enquiries
        </button>
      </div>
      <div className="content">
        <div className="message-list">
          {messages[activeTab]?.length > 0 ? (
            messages[activeTab].map((message) => (
              <div
                className="message-card"
                key={message.id}
                onClick={() => handleReply(message)}
              >
                <h3>{message.staff}: {message.subject}</h3>
                <p>{message.message.slice(0, 50)}...</p>
                <div className="message-meta">
                  <span>{message.date}</span>
                  <span>{message.time}</span>
                </div>
              </div>
            ))
          ) : (
            <p>No {activeTab}s available.</p>
          )}
        </div>
        <div className="message-details">
          {selectedMessage ? (
            <>
              <h2>{selectedMessage.subject}</h2>
              <p><strong>Staff:</strong> {selectedMessage.staff}</p>
              <p><strong>From:</strong> {selectedMessage.email}</p>
              <p><strong>Date:</strong> {selectedMessage.date}</p>
              <p><strong>Time:</strong> {selectedMessage.time}</p>
              <p><strong>Message:</strong> {selectedMessage.message}</p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>From:</label>
                  <input
                    type="email"
                    name="from"
                    value={replyData.from}
                    onChange={handleChange}
                    disabled
                  />
                </div>
                <div className="form-group">
                  <label>To:</label>
                  <input
                    type="email"
                    name="to"
                    value={replyData.to}
                    onChange={handleChange}
                    disabled
                  />
                </div>
                <div className="form-group">
                  <label>Reply Message:</label>
                  <textarea
                    name="replyMessage"
                    value={replyData.replyMessage}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Type your reply here..."
                  />
                </div>
                <div className="form-group">
                  <label>Attachment:</label>
                  <input
                    type="file"
                    name="attachment"
                    onChange={handleChange}
                  />
                </div>
                <button type="submit">Send Reply</button>
              </form>
            </>
          ) : (
            <p>Select a message to view details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
