import React from "react";

const NotificationCard = ({ message, username, onClose }) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.card}>
        <h3 style={styles.title}>Hello, {username}!</h3>
        <p style={styles.message}>{message}</p>
        <button style={styles.button} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    width: "300px",
  },
  title: {
    color: "#0F6A6B",
    marginBottom: "10px",
  },
  message: {
    color: "#333",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#0F6A6B",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default NotificationCard;
