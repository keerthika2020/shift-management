import React, { useState } from "react";
import { FaUsers, FaChartLine, FaCalendarCheck, FaCheckCircle } from "react-icons/fa"; // Using FontAwesome icons

function KeyMetrics() {
  const [selectedMetric, setSelectedMetric] = useState(null); // State for tracking clicked metric
  
  const metrics = [
    { id: 1, title: "Total Staff Count", value: 120, icon: <FaUsers /> },
    { id: 2, title: "Shift Coverage %", value: "90%", icon: <FaChartLine /> },
    { id: 3, title: "Attendance Metrics", value: "95%", icon: <FaCalendarCheck /> },
    { id: 4, title: "Shift Assignment Status", value: "80%", icon: <FaCheckCircle /> },
  ];

  const handleClick = (id) => {
    setSelectedMetric(id === selectedMetric ? null : id); // Toggle the selection
  };

  return (
    <div style={{ padding: "40px", marginLeft: "250px" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "600", color: "#333", marginBottom: "30px" }}>Key Metrics</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)", // 2 cards per row
          gap: "30px",
          marginTop: "40px",
        }}
      >
        {metrics.map((metric) => (
          <div
            key={metric.id}
            onClick={() => handleClick(metric.id)} // Handle click event
            style={{
              background: "linear-gradient(135deg, #00796B, #004D40)", // Gradient background
              color: "white",
              borderRadius: "15px",
              padding: "25px",
              textAlign: "center",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease, background 0.3s ease",
              cursor: "pointer", // Add a cursor for interactivity
              transform: selectedMetric === metric.id ? "scale(1.1)" : "scale(1)", // Scale effect on click
              boxShadow: selectedMetric === metric.id ? "0 12px 20px rgba(0, 0, 0, 0.2)" : "0 6px 12px rgba(0, 0, 0, 0.15)", // Stronger shadow on click
            }}
            className="metric-card"
          >
            <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{metric.icon}</div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: "500", marginBottom: "10px" }}>{metric.title}</h2>
            <p style={{ fontSize: "2rem", fontWeight: "bold", marginTop: "10px" }}>
              {metric.value}
            </p>
            {selectedMetric === metric.id && (
              <div
                style={{
                  marginTop: "15px",
                  padding: "10px",
                  background: "#004D40",
                  borderRadius: "8px",
                  fontSize: "1.1rem",
                  color: "#f0f0f0",
                  transition: "opacity 0.3s ease",
                }}
              >
                <strong>More Info:</strong> Here you can add additional details about the metric or any extra functionality.
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default KeyMetrics;
