import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  MenuItem,
  Grid,
} from "@mui/material";
import Header from "../components/homepage/Header";
import Footer from "../components/homepage/Footer";

const ContactUs = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());

  function generateCaptcha() {
    return Math.random().toString(36).substr(2, 6).toUpperCase();
  }

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
  };

  return (
    <div>
      <Header />
      <Box sx={{ padding: "20px", backgroundColor: "#f8f9fa" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ marginBottom: "20px", color: "#6c757d" }}
        >
          Vitality Lifecare Hospitals is always looking to make things easier
          for you. Please fill out the form below, and we will get back to you.
        </Typography>
        <Box
          component="form"
          sx={{
            maxWidth: "800px",
            margin: "auto",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: 3,
          }}
        >
          <Grid container spacing={3}>
            {/* Type of Query */}
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                  Type of Query
                </Typography>
                <RadioGroup row name="query-type">
                  <FormControlLabel
                    value="Enquiry"
                    control={<Radio />}
                    label="Enquiry"
                  />
                  <FormControlLabel
                    value="Complaint"
                    control={<Radio />}
                    label="Complaint"
                  />
                  <FormControlLabel
                    value="Feedback"
                    control={<Radio />}
                    label="Feedback"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            {/* Full Name */}
            <Grid item xs={12}>
              <TextField fullWidth label="Full Name" variant="outlined" required />
            </Grid>

            {/* Email */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Id"
                variant="outlined"
                type="email"
                required
              />
            </Grid>

            {/* Mobile Number with Dropdown for Country Code */}
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <FormControl fullWidth>
                    <TextField
                      select
                      label="Country Code"
                      defaultValue="+91"
                    >
                      <MenuItem value="+91">+91</MenuItem>
                      <MenuItem value="+1">+1</MenuItem>
                      <MenuItem value="+44">+44</MenuItem>
                      {/* Add more country codes as needed */}
                    </TextField>
                  </FormControl>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    label="Mobile Number"
                    variant="outlined"
                    type="tel"
                    required
                  />
                </Grid>
              </Grid>
            </Grid>

            {/* Dropdowns: City, Hospital, Speciality */}
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <TextField select label="City">
                  <MenuItem value="Chennai">Chennai</MenuItem>
                  <MenuItem value="Bangalore">Bangalore</MenuItem>
                  <MenuItem value="Mumbai">Mumbai</MenuItem>
                  {/* Add more cities */}
                </TextField>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <TextField select label="Hospital">
                  <MenuItem value="Vitality Main Branch">
                    Vitality Main Branch
                  </MenuItem>
                  <MenuItem value="Vitality South Branch">
                    Vitality South Branch
                  </MenuItem>
                  <MenuItem value="Vitality East Branch">
                    Vitality East Branch
                  </MenuItem>
                  {/* Add more hospitals */}
                </TextField>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <TextField select label="Speciality">
                  <MenuItem value="Cardiology">Cardiology</MenuItem>
                  <MenuItem value="Orthopedics">Orthopedics</MenuItem>
                  <MenuItem value="Neurology">Neurology</MenuItem>
                  {/* Add more specialties */}
                </TextField>
              </FormControl>
            </Grid>

            {/* Message Box */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                sx={{ resize: "vertical" }}
                required
              />
            </Grid>

            {/* Captcha */}
            <Grid item xs={12}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={6}>
                  <Box
                    sx={{
                      padding: "10px",
                      backgroundColor: "#f1f1f1",
                      textAlign: "center",
                      borderRadius: "4px",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    {captcha}
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Enter Captcha"
                    variant="outlined"
                    required
                  />
                </Grid>
              </Grid>
              <Typography
                variant="body2"
                sx={{ marginTop: "10px", cursor: "pointer", color: "#007bff" }}
                onClick={refreshCaptcha}
              >
                Can’t read the image? Click here to refresh.
              </Typography>
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ padding: "10px", fontSize: "16px" }}
              >
                Submit Form
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Typography
          variant="body2"
          align="center"
          sx={{ marginTop: "20px", color: "#6c757d" }}
        >
          You can also write to us at{" "}
          <Typography
            variant="body2"
            component="span"
            color="primary"
            sx={{ fontWeight: "bold" }}
          >
            info@vitalitylifecare.com
          </Typography>
        </Typography>
      </Box>
      <Footer />
    </div>
  );
};

export default ContactUs;
