import React from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom

const Footer = () => {
    return (
        <footer  id="footer" style={{ backgroundColor: "#0F6A6B", color: "#fff", padding: "20px" }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        Vitality Lifecare
                    </Typography>
                    <Typography variant="body2">
                        A Hospital Management System designed to streamline various aspects of healthcare facility operations.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Typography variant="h6" gutterBottom>
                        Company
                    </Typography>
                    <ul>
                        <li>
                            {/* Link to Home Page */}
                            <Link to="/" style={linkStyle}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about-us" style={linkStyle}>About Us</Link>
                        </li>
                        <li>
                            <Link to="/services" style={linkStyle}>Our Services</Link>
                        </li>
                        <li>
                            <Link to="/contact" style={linkStyle}>Contact Us</Link>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Typography variant="h6" gutterBottom>
                        Services
                    </Typography>
                    <ul>
                        <li>
                            <Link to="/ambulance" style={linkStyle}>Ambulance Services</Link>
                        </li>
                        <li>
                            <Link to="/medical-services" style={linkStyle}>24/7 Medical Services</Link>
                        </li>
                        <li>
                            <Link to="/pharmacy" style={linkStyle}>Pharmacy</Link>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Typography variant="h6" gutterBottom>
                        Quick Links
                    </Typography>
                    <ul>
                        <li>
                            <Link to="/why-choose-us" style={linkStyle}>Why Choose Us</Link>
                        </li>
                        <li>
                            <Link to="/news-articles" style={linkStyle}>News & Articles</Link>
                        </li>
                        <li>
                            <Link to="/login" style={linkStyle}>Login</Link>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Typography variant="h6" gutterBottom>
                        Official Info
                    </Typography>
                    <Typography variant="body2">
                        <Link to="/location" style={linkStyle}>5/639, Rajiv Gandhi Salai, Tirumalai Nagar, Perungudi, Chennai, Tamil Nadu 600096</Link>
                    </Typography>
                    <Typography variant="body2">
                        <Link to="mailto:chennai@vitalitygroup.com" style={linkStyle}>chennai@vitalitygroup.com</Link>
                    </Typography>
                    <Typography variant="body2">
                        <Link to="tel:+91 98765 43210" style={linkStyle}>+91 98765 43210</Link>
                    </Typography>
                </Grid>
            </Grid>
            <Box mt={4}>
                <Typography variant="body2" align="center">
                    Subscribe For The Exclusive Updates
                </Typography>
                <Box display="flex" justifyContent="center" mt={2}>
                    <TextField
                        variant="outlined"
                        placeholder="Your Email"
                        sx={{ backgroundColor: "#fff", borderRadius: "4px", marginRight: "10px", width: "600px" }}
                    />
                    <Button variant="contained" color="primary" style={{ backgroundColor: "#054D4F", width: "100px", marginRight: "10px" }}>
                        Subscribe
                    </Button>
                </Box>
                <Typography variant="body2" align="center" mt={2}>
                    © 2023 Vitality Lifecare | <Link to="/privacy-policy" style={linkStyle}>Privacy Policy</Link> | <Link to="/terms-conditions" style={linkStyle}>Terms & Conditions</Link>
                </Typography>
            </Box>
        </footer>
    );
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  '&:hover': {
    textDecoration: "underline",
  }
};

export default Footer;
