import React from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import Header from "../components/homepage/Header";
import Footer from "../components/homepage/Footer";

const Pharmacy = () => {
  return (
    <div>
      <Header />
      <Box sx={{ padding: "40px", backgroundColor: "#f8f9fa" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Pharmacy & Insurance Partnerships
        </Typography>
        <Typography variant="body1" align="center" sx={{ marginBottom: "30px", color: "#6c757d" }}>
          Explore our wide network of affiliated pharmacies, trusted insurance partners, and branches dedicated to serving you better.
        </Typography>

        {/* Section 1: Affiliated Pharmacies */}
        <Box sx={{ marginBottom: "50px" }}>
          <Typography variant="h5" gutterBottom>
            Our Affiliated Pharmacies
          </Typography>
          <Typography variant="body2" paragraph>
            We are proud to be associated with some of the most reputed pharmacy chains across India. These partnerships ensure timely access to quality medicines and health products for our patients.
          </Typography>
          <Grid container spacing={4}>
            {[
              { name: "Apollo Pharmacy", image: "/assets/pharma/apollo.jpeg" },
              { name: "MedPlus", image: "/assets/pharma/medplus.png" },
              { name: "Netmeds", image: "/assets/pharma/netmeds.png" },
              { name: "Pharmeasy", image: "/assets/pharma/pharmeasy.png" },
            ].map((pharmacy, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ boxShadow: 2 }}>
                  <CardMedia component="img" height="140" image={pharmacy.image} alt={pharmacy.name} />
                  <CardContent>
                    <Typography variant="h6" align="center">
                      {pharmacy.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Section 2: Insurance Partners */}
        <Box sx={{ marginBottom: "50px" }}>
          <Typography variant="h5" gutterBottom>
            Insurance Companies We Work With
          </Typography>
          <Typography variant="body2" paragraph>
            Our hospital is tied up with leading insurance providers to ensure a hassle-free experience for our patients. We accept cashless claims and provide assistance with insurance processes.
          </Typography>
          <Grid container spacing={4}>
            {[
              { name: "Star Health", image: "/assets/pharma/starhealth.png" },
              { name: "ICICI Lombard", image: "/assets/pharma/icici.jpg" },
              { name: "HDFC ERGO", image:"/assets/pharma/hdfc.png" },
              { name: "Bajaj Allianz", image: "/assets/pharma/bajaj.png" },
            ].map((insurance, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ boxShadow: 2 }}>
                  <CardMedia component="img" height="140" image={insurance.image} alt={insurance.name} />
                  <CardContent>
                    <Typography variant="h6" align="center">
                      {insurance.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Section 3: Branches Across India */}
        <Box sx={{ marginBottom: "50px" }}>
          <Typography variant="h5" gutterBottom>
            Our Branches Across India
          </Typography>
          <Typography variant="body2" paragraph>
            With branches located in major cities across India, we are dedicated to making healthcare accessible to all. Find the nearest branch to you.
          </Typography>
          <Grid container spacing={4}>
            {[
              "New Delhi",
              "Mumbai",
              "Chennai",
              "Kolkata",
              "Bangalore",
              "Hyderabad",
              "Pune",
              "Ahmedabad",
              "Lucknow",
              "Jaipur",
            ].map((city, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Box sx={{ padding: "10px", textAlign: "center", backgroundColor: "#ffffff", boxShadow: 2, borderRadius: "8px" }}>
                  <Typography variant="body1" fontWeight="bold">
                    {city}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Section 4: Patient Support */}
        <Box sx={{ padding: "20px", backgroundColor: "#e9f7f5", borderRadius: "10px", textAlign: "center" }}>
          <Typography variant="h5" gutterBottom>
            Patient Support Services
          </Typography>
          <Typography variant="body2" paragraph>
            Need help finding a pharmacy, understanding your insurance coverage, or locating our branches? Contact our dedicated support team at{" "}
            <Typography component="span" color="primary" fontWeight="bold">
              support@vitalitylifecare.com
            </Typography>
            .
          </Typography>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Pharmacy;
