import React from "react";
import { Box, Typography, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Header from "../components/homepage/Header";
import Footer from "../components/homepage/Footer";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Box sx={{ backgroundColor: "#f5f5f5", padding: "20px" }}>
        {/* Section 1: Title */}
        <Box sx={{ backgroundColor: "#f5f4e3", color: "#0F6A6B", padding: "20px", borderRadius: "8px", marginBottom: "20px" }}>
          <Typography variant="h4" align="center" gutterBottom>
            About Vitality Lifecare Hospitals
          </Typography>
        </Box>

        {/* Section 2: Overview */}
        <Box sx={{ padding: "20px", backgroundColor: "white", borderRadius: "8px", marginBottom: "20px" }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <img src="/assets/chennai.png" alt="Hospital" style={{ width: "100%", borderRadius: "8px" }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" paragraph>
                Vitality Lifecare Hospitals, established with the vision of transforming healthcare, is committed to touching lives through exceptional care and innovation. Our mission is to make world-class healthcare accessible and affordable to every individual, while fostering excellence in medical education, research, and healthcare services.
              </Typography>
              <Typography variant="body1" paragraph>
                Founded by renowned healthcare leaders, Vitality Lifecare has grown into a trusted name in the healthcare industry. With a network spanning multiple countries, we offer integrated healthcare services including hospitals, pharmacies, diagnostic clinics, telemedicine facilities, and more.
              </Typography>
              <Typography variant="body1" paragraph>
                At the heart of our operations is a patient-centric approach focused on clinical excellence, cutting-edge technology, and forward-looking research. Our specialized centres provide state-of-the-art treatments, from pioneering surgical procedures to advanced therapies like proton therapy.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Section 3: Vision & Mission */}
        <Box sx={{ padding: "20px", backgroundColor: "#e6f2ff", borderRadius: "8px", marginBottom: "20px" }}>
          <Typography variant="h5" gutterBottom>
            Our Vision
          </Typography>
          <Typography variant="body1" paragraph>
            “To touch a billion lives and redefine global healthcare standards.”
          </Typography>
          <Typography variant="h5" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            “To deliver healthcare of international standards, ensuring excellence in education, research, and patient care.”
          </Typography>
        </Box>

        {/* Section 4: Key Highlights Table */}
        <Box sx={{ padding: "20px", backgroundColor: "white", borderRadius: "8px" }}>
          <Typography variant="h5" gutterBottom>
            Key Highlights
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f5f4e3" }}>
                  <TableCell sx={{ color: "#0F6A6B", fontWeight: "bold" }}>Category</TableCell>
                  <TableCell sx={{ color: "#0F6A6B", fontWeight: "bold" }}>Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Hospitals</TableCell>
                  <TableCell>73</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Number of Beds</TableCell>
                  <TableCell>10,000+</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Pharmacies</TableCell>
                  <TableCell>5,000+</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Primary Care Clinics</TableCell>
                  <TableCell>378+</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Diagnostic Centres</TableCell>
                  <TableCell>1,500+</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Telemedicine Centres</TableCell>
                  <TableCell>200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Medical Education Centres and Research Foundations</TableCell>
                  <TableCell>15+</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default AboutUs;
