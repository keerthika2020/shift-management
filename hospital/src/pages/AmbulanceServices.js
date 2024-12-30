import React from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import Header from "../components/homepage/Header";
import Footer from "../components/homepage/Footer";

const AmbulanceServices = () => {
  return (
    <div>
      <Header />
      <Box sx={{ padding: "40px", backgroundColor: "#f8f9fa" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Ambulance Services
        </Typography>
        <Typography variant="body1" align="center" sx={{ marginBottom: "30px", color: "#6c757d" }}>
          Vitality Lifecare Hospitals offers reliable, prompt, and well-equipped ambulance services to ensure timely medical care and transportation. Our fleet is designed to provide fast and efficient support in emergencies.
        </Typography>

        {/* Section 1: Types of Ambulance Services */}
        <Box sx={{ marginBottom: "50px" }}>
          <Typography variant="h5" gutterBottom>
            Types of Ambulance Services We Offer
          </Typography>
          <Typography variant="body2" paragraph>
            We offer a range of ambulance services tailored to your medical needs. Our well-equipped ambulances are staffed with trained paramedics to provide in-transit care for patients.
          </Typography>
          <Grid container spacing={4}>
            {[
              { name: "Basic Life Support (BLS)", image: "/assets/ambulance/basicls.png", description: "For non-critical patients requiring basic medical care and transportation." },
              { name: "Advanced Life Support (ALS)", image: "/assets/ambulance/advancedls.jpeg", description: "Equipped with advanced medical equipment for critical patients." },
              { name: "Neonatal Ambulance", image: "/assets/ambulance/neonatal.jpg", description: "Specially designed for transporting infants with medical supervision." },
              { name: "Critical Care Ambulance", image: "/assets/ambulance/critical.png", description: "For patients needing intensive monitoring and medical intervention during transportation." },
            ].map((ambulance, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ boxShadow: 2 }}>
                  <CardMedia component="img" height="140" image={ambulance.image} alt={ambulance.name} />
                  <CardContent>
                    <Typography variant="h6" align="center">
                      {ambulance.name}
                    </Typography>
                    <Typography variant="body2" align="center" sx={{ marginTop: "10px" }}>
                      {ambulance.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Section 2: Ambulance Service Areas */}
        <Box sx={{ marginBottom: "50px" }}>
          <Typography variant="h5" gutterBottom>
            Our Ambulance Coverage Areas
          </Typography>
          <Typography variant="body2" paragraph>
            We cover a vast area to ensure that emergency medical services are available to everyone in need. Whether you are in a city or nearby rural areas, we are just a call away.
          </Typography>
          <Grid container spacing={4}>
            {[
              "Urban Areas",
              "Suburban Areas",
              "Rural Areas",
              "Airport Transfers",
              "Inter-City Transport",
            ].map((area, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box sx={{ padding: "15px", textAlign: "center", backgroundColor: "#ffffff", boxShadow: 2, borderRadius: "8px" }}>
                  <Typography variant="h6">{area}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Section 3: How Ambulance Services Work */}
        <Box sx={{ marginBottom: "50px" }}>
          <Typography variant="h5" gutterBottom>
            How Our Ambulance Services Work
          </Typography>
          <Typography variant="body2" paragraph>
            Our ambulance services are available 24/7. Here’s how you can access them:
          </Typography>
          <ol>
            <li>Call our emergency hotline at <strong>+91 123 456 7890</strong> to request an ambulance.</li>
            <li>Provide details about the patient’s condition and location.</li>
            <li>A well-equipped ambulance along with trained medical staff will arrive at the location promptly.</li>
            <li>Transport the patient to the nearest hospital or your preferred facility with the highest level of care during transit.</li>
          </ol>
        </Box>

        {/* Section 4: Request an Ambulance */}
        <Box sx={{ padding: "20px", backgroundColor: "#e9f7f5", borderRadius: "10px", textAlign: "center" }}>
          <Typography variant="h5" gutterBottom>
            Request an Ambulance
          </Typography>
          <Typography variant="body2" paragraph>
            For immediate ambulance services, please call our 24/7 helpline or fill out the online request form. Our team will be there to assist you as quickly as possible.
          </Typography>
          <Typography variant="body2" color="primary">
            Contact our 24/7 Helpline: <strong>+91 123 456 7890</strong>
          </Typography>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default AmbulanceServices;
