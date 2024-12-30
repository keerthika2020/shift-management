import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import Header from "../components/homepage/Header";
import Footer from "../components/homepage/Footer";

const services = [
  {
    title: "Emergency Care",
    description:
      "Our 24/7 emergency department is equipped with advanced facilities and trained medical professionals to handle all critical situations promptly.",
    image: "/assets/ourservices/emergencycare.png",
  },
  {
    title: "Outpatient Services",
    description:
      "Efficient outpatient services with minimal waiting times. Our specialists ensure comprehensive consultations and follow-ups.",
    image: "/assets/ourservices/outpatient.jpg",
  },
  {
    title: "Inpatient Services",
    description:
      "State-of-the-art inpatient facilities with private rooms, ICUs, and round-the-clock nursing care to ensure patient comfort and recovery.",
    image: "/assets/ourservices/inpatient.jpg",
  },
  {
    title: "Diagnostic Services",
    description:
      "Advanced diagnostic facilities including imaging (MRI, CT, X-ray) and laboratory services for accurate and timely diagnosis.",
    image: "/assets/ourservices/diagnostic.jpg",
  },
  {
    title: "Surgical Services",
    description:
      "A full spectrum of surgical procedures, from minimally invasive to complex surgeries, performed by expert surgeons using cutting-edge technology.",
    image: "/assets/ourservices/surgical.jpeg",
  },
  {
    title: "Pharmacy Services",
    description:
      "On-campus pharmacies providing easy access to medications with extended operational hours for patient convenience.",
    image: "/assets/ourservices/pharmacy.jpeg",
  },
  {
    title: "Maternity and Child Care",
    description:
      "Comprehensive maternity and pediatric services, including prenatal care, childbirth, neonatal care, and vaccination programs.",
    image: "/assets/ourservices/maternal.jpg",
  },
  {
    title: "Rehabilitation Services",
    description:
      "Dedicated rehabilitation units offering physical therapy, occupational therapy, and psychological support to aid recovery.",
    image: "/assets/ourservices/rehab.jpg",
  },
  {
    title: "Health Check-Up Packages",
    description:
      "Affordable and customized health check-up packages designed to cater to all age groups, ensuring preventive healthcare.",
    image: "/assets/ourservices/healthcheck.png",
  },
];

const OurServices = () => {
  return (
    <div>
      <Header />
      <Box sx={{ padding: "20px", backgroundColor: "#f8f9fa" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="body1" align="center" sx={{ marginBottom: "20px", color: "#6c757d" }}>
          We are committed to providing exceptional healthcare services to meet the diverse needs of our patients.
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card sx={{ boxShadow: 3, borderRadius: "8px" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default OurServices;
