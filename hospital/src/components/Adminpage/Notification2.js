import React, { useState, useEffect } from "react";
import { FaLink, FaPaperPlane, FaTrash } from "react-icons/fa";

const Notification2 = () => {
  const [fromEmail, setFromEmail] = useState(""); // Admin email
  const [replyMessage, setReplyMessage] = useState("");
  const [recipient, setRecipient] = useState("hod"); // Recipient type (hod/staff)
  const [role, setRole] = useState("admin"); // Role of the user sending the message
  const [hodNotifications, setHodNotifications] = useState([]); // Notifications for HOD
  const [staffNotifications, setStaffNotifications] = useState([]); // Notifications for Staff

  const handleReply = () => {
    // Logic to send the message to the selected recipient
    console.log(`Message sent to ${recipient} from ${role}:`, replyMessage);

    if (recipient === "hod") {
      setHodNotifications((prevNotifications) => [
        ...prevNotifications,
        { id: Date.now(), sender: role, message: replyMessage },
      ]);
    } else if (recipient === "staff") {
      setStaffNotifications((prevNotifications) => [
        ...prevNotifications,
        { id: Date.now(), sender: role, message: replyMessage },
      ]);
    }

    // Reset message input after sending
    setReplyMessage("");
  };

  const handleDelete = () => {
    // Handle delete logic
    setReplyMessage("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          width: "250px",
          height: "100vh",
          backgroundColor: "#F0F4F7",
          padding: "20px",
          borderRight: "1px solid #ddd",
        }}
      >
        <h3>Admin Panel</h3>
        {/* Add sidebar navigation here */}
      </div>

      <div
        style={{
          flex: 1,
          padding: "20px",
          backgroundColor: "#fff",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <h2>Send a Message</h2>
        <div>
          {/* From Section */}
          <div>
            <strong>From:</strong>
            <input
              type="email"
              value={fromEmail}
              onChange={(e) => setFromEmail(e.target.value)}
              disabled
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "16px",
                marginBottom: "10px",
              }}
            />
            <div>{fromEmail}</div>
          </div>

          {/* Role Section */}
          <div style={{ marginTop: "10px" }}>
            <strong>Role:</strong>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            >
              <option value="admin">Admin</option>
              <option value="ceo">CEO</option>
              <option value="medical_director">Medical Director</option>
              <option value="hr">HR</option>
              <option value="operations">Operations</option>
            </select>
          </div>

          {/* To Section */}
          <div style={{ marginTop: "10px" }}>
            <strong>To:</strong>
            <select
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            >
              <option value="hod">HOD</option>
              <option value="staff">Staff</option>
            </select>
          </div>

          {/* Message Section */}
          <div style={{ marginTop: "10px" }}>
            <textarea
              rows="4"
              cols="50"
              placeholder="Type your message..."
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            />
          </div>

          {/* Send Button */}
          <div style={{ marginTop: "20px" }}>
            <button
              onClick={handleReply}
              style={{
                backgroundColor: "#0F6A6B",
                color: "white",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
            >
              <FaPaperPlane style={{ marginRight: "10px" }} />
              Send
            </button>
          </div>

          {/* Delete Button */}
          <button
            onClick={handleDelete}
            style={{
              backgroundColor: "transparent",
              color: "#FF6B6B",
              border: "none",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            <FaTrash style={{ marginRight: "5px" }} />
            Delete
          </button>
        </div>

        {/* Notification Section */}
        <div style={{ marginTop: "30px" }}>
          <h2>Notifications</h2>

          {/* HOD Notifications */}
          <div style={{ marginTop: "10px", border: "1px solid #ddd", padding: "10px", borderRadius: "5px" }}>
            <h3>HOD Notifications</h3>
            {hodNotifications.length === 0 ? (
              <p>No new notifications</p>
            ) : (
              hodNotifications.map((notification) => (
                <div key={notification.id} style={{ marginBottom: "10px" }}>
                  <strong>{notification.sender}: </strong>
                  <span>{notification.message}</span>
                </div>
              ))
            )}
          </div>

          {/* Staff Notifications */}
          <div style={{ marginTop: "30px", border: "1px solid #ddd", padding: "10px", borderRadius: "5px" }}>
            <h3>Staff Notifications</h3>
            {staffNotifications.length === 0 ? (
              <p>No new notifications</p>
            ) : (
              staffNotifications.map((notification) => (
                <div key={notification.id} style={{ marginBottom: "10px" }}>
                  <strong>{notification.sender}: </strong>
                  <span>{notification.message}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification2;
