import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { UserContext } from "../../context/UserContext";
import { useParams } from "react-router-dom";

import {
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import "./styles.css";
import Header from "./Header";
import Footer from "./Footer";

function Login() {
  const { setUsername1 } = useContext(UserContext);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://smart-shift-management31-008t.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, role }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Save token in localStorage
        localStorage.setItem("authToken", data.token);
  
        setUsername1(data.username1); // Set the username in context
        if (data.role === "Management") {
          navigate("/Dashboard1"); // HOD Dashboard
        } else if (data.role === "Admin") {
          navigate("/Adminpage/Dashboard2"); // Admin Dashboard
        } else if (data.role === "Staff") {
          navigate("/staffpage/PersonalOverviewStaffPage");
        }    
      } else {
        setErrorMessage(data.error);
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };
  

  return (
    <div>
      <Header />

      <div
        style={{
          backgroundColor: "#fff",
          minHeight: "100vh",
          padding: "50px 0",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            backgroundColor: "#edf5ec",
            padding: "30px",
            borderRadius: "8px",
          }}
        >
          <Typography
            variant="h4"
            style={{ textAlign: "center", color: "#0F6A6B", marginBottom: "30px" }}
          >
            Log In
          </Typography>
          {errorMessage && (
            <Typography
              variant="body2"
              style={{ color: "red", textAlign: "center", marginBottom: "20px" }}
            >
              {errorMessage}
            </Typography>
          )}
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>Email </InputLabel>
              <OutlinedInput
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email "
              />
            </FormControl>

            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>Role</InputLabel>
              <Select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                label="Role"
              >
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="Management">Management</MenuItem>
                <MenuItem value="Staff">Staff</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                type={passwordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                endAdornment={
                  <InputAdornment position="end">
                    <span
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                      onClick={handlePasswordToggle}
                    >
                      {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "20px" }}
            >
              Sign In
            </Button>
          </form>

          <p style={{ textAlign: "center", marginTop: "20px" }}>
            <Link to="/forgot-password" style={{ color: "#0F6A6B" }}>Forgot Password?</Link>
          </p>

          <p style={{ textAlign: "center", marginTop: "20px" }}>
            Don’t have an account? <Link to="/register" style={{ color: "#0F6A6B" }}>Sign Up</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendLink = async () => {
    try {
      const response = await fetch("https://smart-shift-management31-008t.onrender.com/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) setMessage(data.message);
      else setMessage(data.error);
    } catch (error) {
      setMessage("Failed to send reset link. Please try again.");
    }
  };

  return (
    <div
    style={{
      width: "300px",
      padding: "20px",
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      margin: "100px auto",
      fontFamily: "Arial, sans-serif",
    }}
  >
    <h1 style={{ fontSize: "1.5rem", marginBottom: "20px", color: "#333333" }}>
      Forgot Password
    </h1>
    <input
      type="email"
      placeholder="Enter your registered email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      style={{
        width: "90%",
        padding: "10px",
        margin: "10px 0",
        border: "1px solid #cccccc",
        borderRadius: "5px",
        fontSize: "1rem",
      }}
    />
    <button
      onClick={handleSendLink}
      style={{
        width: "100px",
        padding: "10px",
        backgroundColor: "#007bff",
        color: "#ffffff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "0.9rem",
        marginTop: "10px",
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
    >
      Send
    </button>
    {message && (
      <p style={{ marginTop: "15px", color: "#ff0000", fontSize: "0.9rem" }}>
        {message}
      </p>
    )}
  </div>
  );
}

function ResetPassword({  }) {
  const { resetToken } = useParams(); // Assuming you are using React Router
  const navigate = useNavigate(); // Hook for navigation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [message, setMessage] = useState("");

  const handleResetPassword = async () => {
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("https://smart-shift-management31-008t.onrender.com/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resetToken, email, newPassword: password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setTimeout(() => {
          navigate("/login"); // Navigate back to login after success
        }, 2000); // Delay for better UX
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      setMessage("Failed to reset password. Please try again.");
    }
  };

  return (
    <div
      style={{
        width: "350px",
        padding: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        margin: "100px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "1.5rem",
          marginBottom: "20px",
          color: "#333333",
        }}
      >
        Reset Password
      </h1>
      <input
        type="email"
        placeholder="Enter your registered email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "90%",
          padding: "10px",
          margin: "10px 0",
          border: "1px solid #cccccc",
          borderRadius: "5px",
          fontSize: "1rem",
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "90%",
          margin: "10px auto",
          border: "1px solid #cccccc",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        <input
          type={passwordVisible ? "text" : "password"}
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "80%",
            border: "none",
            outline: "none",
            fontSize: "1rem",
          }}
        />
        
        {passwordVisible ? (
    <FaEye
      onClick={() => setPasswordVisible(!passwordVisible)}
      style={{
        fontSize: "1.2rem",
        color: "#888888",
        cursor: "pointer",
      }}
    />
  ) : (
    <FaEyeSlash
      onClick={() => setPasswordVisible(!passwordVisible)}
      style={{
        fontSize: "1.2rem",
        color: "#888888",
        cursor: "pointer",
      }}
    />
  )}
      </div>
      <input
        type="password"
        placeholder="Confirm New Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        style={{
          width: "90%",
          padding: "10px",
          margin: "10px 0",
          border: "1px solid #cccccc",
          borderRadius: "5px",
          fontSize: "1rem",
        }}
      />
      <button
        onClick={handleResetPassword}
        style={{
          width: "120px",
          padding: "10px",
          backgroundColor: "#007bff",
          color: "#ffffff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "0.9rem",
          marginTop: "10px",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Reset Password
      </button>
      {message && (
        <p
          style={{
            marginTop: "15px",
            color: password === confirmPassword ? "#28a745" : "#ff0000",
            fontSize: "0.9rem",
          }}
        >
          {message}
          
        </p>
      )}
    </div>
  );
}

export default Login;
export { ForgotPassword, ResetPassword };
