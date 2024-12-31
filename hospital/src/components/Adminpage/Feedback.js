import React, { useState } from "react";
import "./Feedback.css";

const Feedback = () => {
  const [issues, setIssues] = useState([
    {
      id: 1,
      title: "Shift Scheduling Confusion",
      description:
        "The recent shift scheduling update has caused confusion among the nursing staff, particularly regarding overlapping shift hours.",
      priority: "High",
      reportedBy: "Nursing Department",
      department: "Nursing",
      status: "Pending",
      feedbackType: "Bad", // New field to categorize feedback as "Good" or "Bad"
      details:
        "After the implementation of the new shift rotation on December 20th, staff members are unsure of the correct start and end times for shifts.",
    },
    {
      id: 2,
      title: "Positive Shift Flexibility",
      description:
        "The introduction of flexible shift hours has been well-received by the nursing staff, allowing for better work-life balance.",
      priority: "Medium",
      reportedBy: "HR Department",
      department: "HR",
      status: "Pending",
      feedbackType: "Good", // Positive feedback
      details:
        "Staff members have expressed satisfaction with the ability to adjust shifts according to personal needs, leading to increased morale.",
    },
    {
      id: 3,
      title: "Inadequate Overtime Management",
      description:
        "Excessive overtime is being reported across departments, leading to burnout among healthcare workers.",
      priority: "Critical",
      reportedBy: "Administration",
      department: "Administration",
      status: "Pending",
      feedbackType: "Bad", // Negative feedback
      details:
        "Overtime hours are not being tracked effectively, causing some staff members to work beyond their scheduled hours without compensation.",
    },
    {
      id: 4,
      title: "Shift Handover Communication Issues",
      description:
        "The shift handover process has led to miscommunication between day and night shifts, affecting patient care.",
      priority: "High",
      reportedBy: "Medical Team",
      department: "Medical",
      status: "Pending",
      feedbackType: "Bad", // Negative feedback
      details:
        "Doctors and nurses report that the communication tools for shift handover are not efficient, causing delays in patient treatment.",
    },
  ]);
  const [expandedIssueId, setExpandedIssueId] = useState(null);

  const handleViewClick = (id) => {
    setExpandedIssueId((prevId) => (prevId === id ? null : id));
  };

  const handleResolveClick = (id) => {
    setIssues((prevIssues) =>
      prevIssues.map((issue) =>
        issue.id === id ? { ...issue, status: "Resolved" } : issue
      )
    );
  };

  const handleAssignClick = (id) => {
    setIssues((prevIssues) =>
      prevIssues.map((issue) =>
        issue.id === id ? { ...issue, status: "Assigned to Relevant Department" } : issue
      )
    );
  };

  const handleEscalateClick = (id) => {
    setIssues((prevIssues) =>
      prevIssues.map((issue) =>
        issue.id === id ? { ...issue, status: "Escalated" } : issue
      )
    );
  };

  return (
    <div className="feedback-support">
      <h2>Healthcare Shift Management Feedback</h2>
      {issues.map((issue) => (
        <div
          key={issue.id}
          className={`issue-card ${issue.feedbackType.toLowerCase()}`}
        >
          <div className="issue-header">
            <h3>{issue.title}</h3>
            <span
              className={`status ${issue.status.toLowerCase().replace(
                /\s/g,
                "-"
              )}`}
            >
              {issue.status}
            </span>
          </div>
          <p className="description">
            <strong>Description:</strong> {issue.description}
          </p>
          <p className="priority">
            <strong>Priority:</strong> {issue.priority}
          </p>
          <p className="reported-by">
            <strong>Reported By:</strong> {issue.reportedBy} (Department: {issue.department})
          </p>
          {expandedIssueId === issue.id && (
            <div className="details">
              <p>
                <strong>Details:</strong> {issue.details}
              </p>
            </div>
          )}
          <div className="actions">
            <button
              className="btn view"
              onClick={() => handleViewClick(issue.id)}
            >
              {expandedIssueId === issue.id ? "Close" : "View Details"}
            </button>
            <button
              className="btn resolve"
              onClick={() => handleResolveClick(issue.id)}
            >
              Resolve
            </button>
            <button
              className="btn assign"
              onClick={() => handleAssignClick(issue.id)}
            >
              Assign to Department
            </button>
            <button
              className="btn escalate"
              onClick={() => handleEscalateClick(issue.id)}
            >
              Escalate
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
