import React, { useState, useEffect } from "react";
import Sidebar1 from "./Sidebar1"; // Replace this with your Sidebar component
import { FaPaperclip, FaPaperPlane } from "react-icons/fa"; // Icon for file attachment
import { FaLink } from "react-icons/fa"; // Icon for link attachment
import { FaTrash } from "react-icons/fa";//Icon for delete 
import "./hodpagestyles/hodnotification.css";

const Notification1 = () => {
  const [notifications, setNotifications] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyMessage, setReplyMessage] = useState("");
  const [replyEmail, setReplyEmail] = useState("");
  const [fromEmail, setFromEmail] = useState("myemail@example.com"); // Replace with your email
  const [selectedFiles, setSelectedFiles] = useState([]); // Updated for multiple files
  const [linkText, setLinkText] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [showLinkForm, setShowLinkForm] = useState(false);
  const [message, setMessage] = useState(""); // Declare 'message' state here

  // Mock function to fetch notifications (replace with API call)
  useEffect(() => {
    const fetchNotifications = () => {
      setNotifications([
        {
          id: 1,
          senderEmail: "user1@example.com",
          senderName: "User One",
          subject: "Meeting Update",
          message:
            "The meeting is scheduled for 3 PM tomorrow. Please confirm your availability.",
          date: "Mar 4",
          time: "10:30 AM",
          read: false,
        },
        {
          id: 2,
          senderEmail: "user2@example.com",
          senderName: "User Two",
          subject: "Task Reminder",
          message: "Please complete your assigned tasks by EOD.",
          date: "Mar 3",
          time: "2:15 PM",
          read: false,
        },
        {
          id: 3,
          senderEmail: "user3@example.com",
          senderName: "User Three",
          subject: "Project Submission",
          message: "Dear User,This is a gentle reminder to kindly submit your project by tomorrow at noon as per the deadline. Timely submission will ensure that your work is reviewed and processed without delays. Should you encounter any challenges or require assistance, please do not hesitate to reach out.Looking forward to your submission!Best regards,User Three",
          date: "Mar 2",
          time: "11:00 AM",
          read: false,
        },
        {
          id: 4,
          senderEmail: "user4@example.com",
          senderName: "User Four",
          subject: "Holiday Notification",
          message: "Office will remain closed on March 8 due to a public holiday.",
          date: "Mar 1",
          time: "9:30 AM",
          read: true,
        },
        {
          id: 5,
          senderEmail: "user5@example.com",
          senderName: "User Five",
          subject: "Feedback Request",
          message: "Please provide feedback for the recent workshop.",
          date: "Feb 28",
          time: "3:45 PM",
          read: true,
        },
      ]);
    };
    fetchNotifications();
  }, []);
// render calander remainder notification from timetable
//useEffect(() => {
//  const savedNotifications = JSON.parse(localStorage.getItem("notifications")) || [];
  //setNotifications(savedNotifications);
//}, []);



  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notif) => ({ ...notif, read: true }))
    );
  };

  const handleReply = () => {
    if (replyEmail && replyMessage) {
      console.log("Reply Sent From:", fromEmail);
      console.log("Reply Sent To:", replyEmail);
      console.log("Message:", replyMessage);
      if (selectedFiles.length > 0) {
        console.log("Attachments:", selectedFiles.map((file) => file.name));
        // Handle file upload to a server if needed
      }
      alert(`Reply sent to ${replyEmail}`);
      setReplyMessage("");
      setReplyEmail("");
      setSelectedFiles([]);
      setSelectedMessage(null);
    } else {
      alert("Please fill in both the email and the message.");
    }
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files); // Get the list of selected files
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]); // Append new files to existing ones
  };
  const handleRemoveFile = (fileName) => {
    setSelectedFiles((prev) => prev.filter((file) => file.name !== fileName));
  };
  const handleLinkIconClick = () => {
    setShowLinkForm(!showLinkForm); // Toggle the visibility of the link form
  };

  const handleApplyLink = () => {
    if (linkText && linkUrl) {
      const linkMarkup = `[${linkText}](${linkUrl})`;
// Store the link as text and URL
      setReplyMessage(replyMessage + " " + linkMarkup); // Add the link to the message
      setLinkText("");
      setLinkUrl("");
      setShowLinkForm(false); // Close the form
    } else {
      alert("Please provide both text and link.");
    }
  };

  const handleExpandMessage = (notification) => {
    if (selectedMessage?.id === notification.id) {
      setSelectedMessage(null); // Collapse if the same message is clicked
    } else {
      setSelectedMessage(notification); // Expand new message
      markAsRead(notification.id);
      setReplyEmail(notification.senderEmail);
    }
  };
  const handleDelete = () => {
    setSelectedFiles(null); // Clear the selected file
    setReplyEmail(""); // Clear the "To" address
    setReplyMessage(""); // Clear the message content
  };
  
  const handleNewMessage = () => {
    setSelectedMessage(null); // Close any expanded message
    setReplyEmail(""); // Clear "To" address
    setReplyMessage(""); // Clear the message content
  };
  
  const handleLinkClick = (linkText, linkUrl) => {
    // Open the link in a new tab when clicked
    if (linkUrl) {
      window.open(linkUrl, "_blank");
    }
  };


  return (
    <div className="container_hodnotification">
      {/* Sidebar */}
      <div className="sidebar_hodnotification">
        <Sidebar1 />
      </div>

      {/* Main Content */}
      <div className="mainContent_hodnotification">
        {/* Header */}
        <div className="header_hodnotification">
          <h1 className="headerTitle_hodnotification">New for you</h1>
          <button className="markAllRead_hodnotification" onClick={markAllAsRead}>
            Mark all read
          </button>
        </div>

        {/* Notifications List */}
        <div className="notificationsList_hodnotification">
          {notifications.map((notification) => (
            <div key={notification.id} className="notificationItem_hodnotification">
              <div
                className="notificationHeader_hodnotification"
                onClick={() => handleExpandMessage(notification)}
              >
                {/* Unread Dot */}
                <div
                  className={`unreadDot_hodnotification ${
                    notification.read ? "read_hodnotification" : "unread_hodnotification"
                  }`}
                ></div>

                {/* Notification Details */}
                <div className="notificationDetails_hodnotification">
                  <div className="notificationDetailsHeader_hodnotification">
                    <img
                      src={`https://ui-avatars.com/api/?name=${notification.senderName}&background=9CB3C9&color=fff`}
                      alt="Profile"
                      className="profileImg_hodnotification"
                    />
                    <div>
                      <h4 className="notificationSubject_hodnotification">
                        {notification.subject}
                      </h4>
                      <small className="notificationTime_hodnotification">
                        {notification.date} · {notification.time}
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded Message */}
              {selectedMessage?.id === notification.id && (
                <div className="expandedMessage_hodnotification">
                  <p>{notification.message}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Message Section */}
        <div>
          <h2 className="sendMessage_hodnotification" onClick={handleNewMessage}>
            Send a message
          </h2>
        </div>

        {/* Reply Section */}
        {replyEmail !== null && (
          <div className="replySection_hodnotification">
            <h2 className="replyTitle_hodnotification">Reply</h2>

            {/* From Section */}
            <div>
              <strong>From:</strong>
              <div className="emailInputSection_hodnotification">
                <img
                  src={`https://ui-avatars.com/api/?name=Me&background=9CB3C9&color=fff`}
                  alt="Profile"
                  className="profileImgSmall_hodnotification"
                />
                <input
                  type="email"
                  value={fromEmail}
                  onChange={(e) => setFromEmail(e.target.value)}
                  className="emailInput_hodnotification"
                />
              </div>
            </div>

            {/* To Section */}
            <div className="toSection_hodnotification">
              <strong>To:</strong>
              <div className="emailInputSection_hodnotification">
                <img
                  src={`https://ui-avatars.com/api/?name=${replyEmail}&background=9CB3C9&color=fff`}
                  alt="Profile"
                  className="profileImgSmall_hodnotification"
                />
                <input
                  type="email"
                  value={replyEmail}
                  onChange={(e) => setReplyEmail(e.target.value)}
                  className="emailInput_hodnotification"
                />
              </div>
            </div>

            {/* Message Input */}
            <textarea
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
              placeholder="Write your message..."
              rows="5"
              className="messageInput_hodnotification"
            ></textarea>

            {/* Attachments Section */}
            <div className="attachmentsSection_hodnotification">
              <div className="attachmentsIcons_hodnotification">
                <label htmlFor="file-upload" className="attachmentIcon_hodnotification">
                  <FaPaperclip />
                  <input
                    type="file"
                    id="file-upload"
                    onChange={handleFileUpload}
                    style={{ display: "none" }}
                  />
                </label>
                <button
                  className="linkIcon_hodnotification"
                  onClick={handleLinkIconClick}
                >
                  <FaLink />
                </button>
                <button
                  className="deleteIcon_hodnotification"
                  onClick={handleDelete}
                >
                  <FaTrash />
                </button>
              </div>
              <button
                className="sendButton_hodnotification"
                onClick={handleReply}
              >
                <FaPaperPlane />
              </button>
            </div>
          {/* Display Selected Files */}
      {selectedFiles?.length > 0 && (
        <div className="attachedFiles_hodnotification">
          <strong>Attached Files:</strong>
          <ul>
            {selectedFiles.map((file) => (
              <li key={file.name}>
                {file.name}{" "}
                <button
                  style={{
                    height: "30px",
                    width: "90px",
                    marginLeft: "10px",
                    marginBottom: "10px",
                  }}
                  onClick={() => handleRemoveFile(file.name)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    
            {/* Link Form */}
            {showLinkForm && (
              <div className="linkForm_hodnotification">
                <input
                  type="text"
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                  placeholder="Link text"
                  className="linkTextInput_hodnotification"
                />
                <input
                  type="text"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  placeholder="Link URL"
                  className="linkUrlInput_hodnotification"
                />
                <button
                  className="applyLinkButton_hodnotification"
                  onClick={handleApplyLink}
                >
                  Apply Link
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification1;