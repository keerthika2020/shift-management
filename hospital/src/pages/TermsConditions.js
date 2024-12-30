import React from "react";
import { Container, Typography, Box, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/system";
import Header from '../components/homepage/Header';
import Footer from '../components/homepage/Footer';


const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: "#0F6A6B", // Set the color for section titles
  marginBottom: theme.spacing(2),
}));

const ListItemStyled = styled(ListItem)(({ theme }) => ({
  borderBottom: "1px solid #ddd", // Add a line under each list item
  paddingBottom: theme.spacing(1), // Optional, add some space below list items
  paddingTop: theme.spacing(1),    // Optional, add some space above list items
}));

function TermsConditions() {
  return (
    <div>
         <Header />
    <Container sx={{ marginTop: 5, padding: 3 }}>
     
      <Typography variant="h4" align="center" gutterBottom>
        Terms and Conditions
      </Typography>

      <Box mb={3}>
        <SectionTitle variant="h6" gutterBottom>
          1. Introduction
        </SectionTitle>
        <Typography variant="body1" paragraph>
          Welcome to Vitality Lifecare. By using our website, you agree to comply with the following terms and conditions.
        </Typography>
      </Box>

      <Box mb={3}>
        <SectionTitle variant="h6" gutterBottom>
          2. Acceptance of Terms
        </SectionTitle>
        <Typography variant="body1" paragraph>
          By accessing and using the services provided by Vitality Lifecare, you agree to be bound by these terms. If you do not agree, please refrain from using the site.
        </Typography>
      </Box>

      <Box mb={3}>
        <SectionTitle variant="h6" gutterBottom>
          3. Use of Services
        </SectionTitle>
        <Typography variant="body1" paragraph>
          You agree to use the services only for lawful purposes and in a manner that does not infringe the rights of others.
        </Typography>
        <List>
          <ListItemStyled>
            <ListItemText primary="You shall not misuse the website or its content." />
          </ListItemStyled>
          <ListItemStyled>
            <ListItemText primary="You agree not to disrupt or interfere with the functioning of the website." />
          </ListItemStyled>
        </List>
      </Box>

      <Box mb={3}>
        <SectionTitle variant="h6" gutterBottom>
          4. User Responsibilities
        </SectionTitle>
        <Typography variant="body1" paragraph>
          As a user, you are responsible for maintaining the confidentiality of your account and passwords and for all activities that occur under your account.
        </Typography>
        <List>
          <ListItemStyled>
            <ListItemText primary="Keep your login credentials confidential." />
          </ListItemStyled>
          <ListItemStyled>
            <ListItemText primary="Notify us immediately if you suspect any unauthorized use of your account." />
          </ListItemStyled>
        </List>
      </Box>

      <Box mb={3}>
        <SectionTitle variant="h6" gutterBottom>
          5. Privacy Policy
        </SectionTitle>
        <Typography variant="body1" paragraph>
          Your use of the services is also governed by our Privacy Policy, which explains how we collect, use, and protect your information.
        </Typography>
        <List>
          <ListItemStyled>
            <ListItemText primary="Read our Privacy Policy to understand how your data is managed." />
          </ListItemStyled>
        </List>
      </Box>

      <Box mb={3}>
        <SectionTitle variant="h6" gutterBottom>
          6. Limitation of Liability
        </SectionTitle>
        <Typography variant="body1" paragraph>
          Vitality Lifecare will not be held responsible for any damages arising from the use or inability to use the services provided on this website.
        </Typography>
        <List>
          <ListItemStyled>
            <ListItemText primary="We are not liable for any indirect, incidental, or consequential damages." />
          </ListItemStyled>
          <ListItemStyled>
            <ListItemText primary="We do not guarantee that the website will be error-free or uninterrupted." />
          </ListItemStyled>
        </List>
      </Box>

      <Box mb={3}>
        <SectionTitle variant="h6" gutterBottom>
          7. Changes to the Terms
        </SectionTitle>
        <Typography variant="body1" paragraph>
          We may update these terms from time to time, and we will notify users of any significant changes. By continuing to use the website after such updates, you accept the revised terms.
        </Typography>
      </Box>

      <Box mb={3}>
        <SectionTitle variant="h6" gutterBottom>
          8. Governing Law
        </SectionTitle>
        <Typography variant="body1" paragraph>
          These terms and conditions are governed by the laws of the jurisdiction in which our business operates. Any legal disputes will be resolved in the courts located within the jurisdiction.
        </Typography>
      </Box>

      <Box mb={3}>
        <SectionTitle variant="h6" gutterBottom>
          9. Contact Information
        </SectionTitle>
        <Typography variant="body1" paragraph>
          If you have any questions about these terms and conditions, please contact us at: 
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Email:</strong> contact@vitalitylifecare.com
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Phone:</strong> +91 98765 43210
        </Typography>
      </Box>

      
    </Container>
    <Footer />
    </div>
  );
}

export default TermsConditions;
