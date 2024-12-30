import React from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import Header from "../components/homepage/Header";
import Footer from "../components/homepage/Footer";

const MedicalServices = () => {
  return (
    <>
      <Header />
      <Box sx={{ padding: "20px", backgroundColor: "#f4f4f4" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Comprehensive Medical Services & Employee Wellness Program
        </Typography>
        <Typography variant="body1" paragraph>
          At Vitality Lifecare, we believe in providing exceptional medical services while also investing in the wellness of our most valuable asset—our healthcare workers. We understand the importance of maintaining a healthy workforce to provide top-tier care for our patients.
        </Typography>

        {/* Employee Wellness Section */}
        <Typography variant="h5" align="left" gutterBottom>
          1. Employee Health & Wellness: A Core Priority
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: "#e9ecef" }}>
              <CardContent>
                <Typography variant="h6">Wellness Screenings</Typography>
                <Typography variant="body2" paragraph>
                  We offer regular health check-ups for all hospital staff, from doctors to support staff. These screenings include heart disease, diabetes, mental health assessments, and lifestyle evaluations to ensure our staff are always at their best.
                </Typography>
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{ textAlign: "center", textDecoration: "underline", cursor: "pointer" }}
                >
                  Learn More
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: "#e9ecef" }}>
              <CardContent>
                <Typography variant="h6">Workplace Stress Management</Typography>
                <Typography variant="body2" paragraph>
                  We offer counseling services and therapy to help our staff manage stress, anxiety, and burnout—ensuring our team can continue to provide excellent patient care.
                </Typography>
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{ textAlign: "center", textDecoration: "underline", cursor: "pointer" }}
                >
                  Learn More
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Innovative Medical Services Section */}
        <Typography variant="h5" align="left" gutterBottom sx={{ marginTop: "30px" }}>
          2. Innovative Medical Services for Employees & Patients
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: "#e9ecef" }}>
              <CardContent>
                <Typography variant="h6">Telemedicine Services</Typography>
                <Typography variant="body2" paragraph>
                  We offer integrated telemedicine services for staff members to conveniently consult with doctors, reducing absenteeism and promoting proactive health management.
                </Typography>
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{ textAlign: "center", textDecoration: "underline", cursor: "pointer" }}
                >
                  Learn More
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: "#e9ecef" }}>
              <CardContent>
                <Typography variant="h6">On-site Health Clinics</Typography>
                <Typography variant="body2" paragraph>
                  Our on-site clinics offer immediate access to medical consultations, vaccinations, emergency treatment, and wellness checkups for staff and their families.
                </Typography>
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{ textAlign: "center", textDecoration: "underline", cursor: "pointer" }}
                >
                  Learn More
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Specialized Services Section */}
        <Typography variant="h5" align="left" gutterBottom sx={{ marginTop: "30px" }}>
          3. Specialized Services for Healthcare Workers
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: "#e9ecef" }}>
              <CardContent>
                <Typography variant="h6">Doctors' Wellness Retreats</Typography>
                <Typography variant="body2" paragraph>
                  We organize annual wellness retreats for doctors and healthcare workers, providing relaxation, skill-building activities, and team-building exercises.
                </Typography>
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{ textAlign: "center", textDecoration: "underline", cursor: "pointer" }}
                >
                  Learn More
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: "#e9ecef" }}>
              <CardContent>
                <Typography variant="h6">Priority Health Services for Staff</Typography>
                <Typography variant="body2" paragraph>
                  We offer priority access to medical services, faster appointments, personalized care, and dedicated medical professionals for our healthcare workers.
                </Typography>
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{ textAlign: "center", textDecoration: "underline", cursor: "pointer" }}
                >
                  Learn More
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Shared Success Section */}
        <Typography variant="h5" align="left" gutterBottom sx={{ marginTop: "30px" }}>
          4. Shared Success: Benefits for Patients & Employees
        </Typography>
        <Typography variant="body1" paragraph>
          Our innovative initiatives benefit both patients and staff. By promoting health, wellness, and collaboration, we enhance care delivery and create an enriching work environment for our employees. Together, we succeed!
        </Typography>

        {/* Call to Action */}
        <Box sx={{ textAlign: "center", marginTop: "40px" }}>
          <Button variant="contained" color="primary" size="large">
            Join Our Mission to Deliver Exceptional Healthcare
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default MedicalServices;
