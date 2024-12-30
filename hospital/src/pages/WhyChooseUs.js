import React from "react";
import { Box, Typography, Grid, List, ListItem, Button } from "@mui/material";
import Header from "../components/homepage/Header";
import Footer from "../components/homepage/Footer";

const WhyChooseUs = () => {
  return (
    <div>
      <Header />
      <Box sx={{ padding: "40px", backgroundColor: "#f4f4f4" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Why Join Vitality Lifecare?
        </Typography>
        <Typography variant="body1" align="center" sx={{ marginBottom: "30px", color: "#6c757d" }}>
          At Vitality Lifecare, we don’t just build careers; we foster communities of passionate healthcare professionals. Here's why you'll thrive with us.
        </Typography>

        {/* Section 1: Benefits and Culture */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              A Culture of Excellence and Innovation
            </Typography>
            <Typography variant="body1" paragraph>
              At Vitality Lifecare, we prioritize innovation and excellence in every aspect of our operations. By joining our team, you’ll be part of a forward-thinking hospital group that embraces new ideas and fosters a collaborative environment. 
            </Typography>
            <List>
              <ListItem>State-of-the-art facilities and technology.</ListItem>
              <ListItem>Opportunities to work with renowned medical experts.</ListItem>
              <ListItem>A supportive team culture that values your growth.</ListItem>
              <ListItem>Recognitions and awards for exceptional contributions.</ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="/assets/ourteam.png" // Replace with actual image path
              alt="Our Team"
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            />
          </Grid>
        </Grid>

        {/* Section 2: Unique Opportunities */}
        <Box sx={{ marginTop: "50px", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: 2 }}>
          <Typography variant="h5" align="center" gutterBottom>
            Unique Opportunities for Growth
          </Typography>
          <Typography variant="body1" align="center" sx={{ marginBottom: "20px" }}>
            We go beyond traditional benefits to help you grow professionally and personally.
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" align="center" gutterBottom>
                Career Advancement
              </Typography>
              <Typography variant="body2" align="center">
                Continuous learning programs, funded certifications, and leadership training.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" align="center" gutterBottom>
                Competitive Compensation
              </Typography>
              <Typography variant="body2" align="center">
                Transparent and performance-based salary packages with yearly bonuses.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" align="center" gutterBottom>
                Work-Life Balance
              </Typography>
              <Typography variant="body2" align="center">
                Flexible schedules, wellness programs, and family-focused policies.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Section 3: Community Engagement */}
        <Box sx={{ marginTop: "50px", padding: "20px", backgroundColor: "#e9f7f5", borderRadius: "10px" }}>
          <Typography variant="h5" align="center" gutterBottom>
            Be Part of a Bigger Mission
          </Typography>
          <Typography variant="body1" align="center" sx={{ marginBottom: "20px" }}>
            Join a healthcare network that actively contributes to the community while driving innovation in patient care.
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom>
                Community Outreach Programs
              </Typography>
              <Typography variant="body2" paragraph>
                Participate in initiatives that impact lives—free medical camps, health awareness drives, and support for underprivileged communities.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom>
                Cutting-Edge Research
              </Typography>
              <Typography variant="body2" paragraph>
                Collaborate on groundbreaking research projects that shape the future of medicine.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box sx={{ marginTop: "40px", textAlign: "center" }}>
  <Button
    component="a"
    href="/register"
    variant="contained"
    color="primary"
    size="large"
    sx={{
      padding: "10px 20px",
      fontSize: "16px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      borderRadius: "8px",
    }}
  >
    Join Our Team Today
  </Button>


          <Typography variant="body2" sx={{ marginTop: "20px", color: "#6c757d" }}>
            For more information, email us at{" "}
            <Typography component="span" color="primary" sx={{ fontWeight: "bold" }}>
              careers@vitalitylifecare.com
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default WhyChooseUs;
