import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import { Box, Button, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput, Typography, Select, MenuItem } from "@mui/material";
import './styles.css'; // Custom CSS file for additional styling
import Header from './Header';
import Footer from './Footer';


function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log("Form submitted");
  };

  return (
    <div>
      <Header/>
      
    <div style={{ backgroundColor: "#fff", minHeight: "100vh", padding: "50px 0" }}>
      <div className="container" style={{ maxWidth: "900px", margin: "0 auto", backgroundColor: "#edf5ec", padding: "30px", borderRadius: "8px" }}>
        
        
        
        <Typography variant="h4" style={{ textAlign: "center", color: "#0F6A6B", marginBottom: "30px" }}>Log In</Typography>
        <form onSubmit={handleSubmit}>
          {/* Username / Email */}
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Email / Username</InputLabel>
            <OutlinedInput
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email / Username"
            />
          </FormControl>

          {/* Role Dropdown */}
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

          {/* Password Field */}
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

          {/* Sign In Button */}
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: "20px" }}>
            Sign In
          </Button>
        </form>

        {/* Sign Up Link */}
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Don’t have an account? <Link to="/register" style={{ color: "#0F6A6B" }}>Sign Up</Link>
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Login;


{/* Home Image Icon to Navigate to Homepage
<Link to="/" style={{ position: "absolute", top: "20px", right: "20px", zIndex: 100 }}>
<img src="/assets/home.jpg" alt="Home" style={{ width: "40px", height: "40px", cursor: "pointer" }} />
</Link> */}