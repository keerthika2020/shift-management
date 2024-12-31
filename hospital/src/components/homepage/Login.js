// Updated login.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
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
      const response = await fetch("http://localhost:8081/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.role === "Management") {
          navigate("/Dashboard1"); // HOD Dashboard
        } else if (data.role === "Admin") {
          navigate("/Adminpage/Dashboard2"); // Admin Dashboard
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
            Don’t have an account? <Link to="/register" style={{ color: "#0F6A6B" }}>Sign Up</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
