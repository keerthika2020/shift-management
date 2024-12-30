import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import Header from '../components/homepage/Header';
import Footer from '../components/homepage/Footer';



const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: '#0F6A6B',  // Set the color for section titles
  marginBottom: theme.spacing(2),
}));

const ListItemStyled = styled(ListItem)(({ theme }) => ({
  borderBottom: '1px solid #ddd',  // Add a line under each list item
  paddingBottom: theme.spacing(1),  // Optional, add some space below list items
  paddingTop: theme.spacing(1),     // Optional, add some space above list items
}));

function PrivacyPolicy() {
   

   
  return ( 
  <div>
     <Header />
    <Container sx={{ marginTop: 5, padding: 3 }}>
        
      <Typography variant="h4" align="center" gutterBottom>
        Workplace Rules and Policies for Hospital Staff
      </Typography>

      <Box mb={3}>
        <SectionTitle variant="h6" gutterBottom>
          1. General Conduct and Behavior
        </SectionTitle>
        <Typography variant="body1" paragraph>
          All staff members are expected to maintain a high standard of professional conduct and behavior. Respectful interactions with patients, colleagues, and other stakeholders are paramount in ensuring a positive work environment and providing excellent patient care.
        </Typography>
        <List>
          <ListItemStyled>
            <ListItemText primary="Demonstrate respect and courtesy to all patients and visitors." />
          </ListItemStyled>
          <ListItemStyled>
            <ListItemText primary="Follow all instructions provided by supervisors and management." />
          </ListItemStyled>
          <ListItemStyled>
            <ListItemText primary="Maintain a positive and proactive attitude at all times." />
          </ListItemStyled>
        </List>
      </Box>

      <Box mb={3}>
        <SectionTitle variant="h6" gutterBottom>
          2. Confidentiality and Data Protection
        </SectionTitle>
        <Typography variant="body1" paragraph>
          Protecting patient information is a legal and ethical responsibility. All hospital staff must adhere to confidentiality agreements and ensure that patient information is not disclosed without proper authorization.
        </Typography>
        <List>
          <ListItemStyled>
            <ListItemText primary="Ensure that patient records and personal information are kept confidential." />
          </ListItemStyled>
          <ListItemStyled>
            <ListItemText primary="Avoid discussing patient information in public areas." />
          </ListItemStyled>
          <ListItemStyled>
            <ListItemText primary="Store all sensitive documents in secure locations." />
          </ListItemStyled>
        </List>
      </Box>

      <Box mb={3}>
        <SectionTitle variant="h6" gutterBottom>
          3. Health and Safety
        </SectionTitle>
        <Typography variant="body1" paragraph>
          The hospital is committed to maintaining a safe working environment. Staff members must comply with all health and safety regulations and promptly report any hazards.
        </Typography>
        <List>
          <ListItemStyled>
            <ListItemText primary="Follow all infection control protocols, including wearing appropriate PPE." />
          </ListItemStyled>
          <ListItemStyled>
            <ListItemText primary="Report any unsafe conditions or accidents to supervisors immediately." />
          </ListItemStyled>
          <ListItemStyled>
            <ListItemText primary="Attend mandatory health and safety training sessions." />
          </ListItemStyled>
        </List>
      </Box>

      <Box mb={3}>
        <SectionTitle variant="h6" gutterBottom>
          4. Attendance and Punctuality
        </SectionTitle>
        <Typography variant="body1" paragraph>
          Hospital staff are expected to arrive on time for their scheduled shifts and adhere to attendance policies. Unscheduled absences and tardiness can negatively impact patient care and team dynamics.
        </Typography>
        <List>
          <ListItemStyled>
            <ListItemText primary="Arrive on time for scheduled shifts and notify supervisors in case of delays." />
          </ListItemStyled>
          <ListItemStyled>
            <ListItemText primary="Notify supervisors in advance for planned leaves or absences." />
          </ListItemStyled>
          <ListItemStyled>
            <ListItemText primary="Follow the hospital's procedure for requesting time off." />
          </ListItemStyled>
        </List>
      </Box>

      <Box mb={3}>
        <SectionTitle variant="h6" gutterBottom>
          5. Dress Code and Uniform
        </SectionTitle>
        <Typography variant="body1" paragraph>
          All hospital staff are required to follow the dress code policy, including wearing the appropriate uniform and maintaining proper hygiene.
        </Typography>
        <List>
          <ListItemStyled>
            <ListItemText primary="Wear the provided uniform or scrubs according to your department's guidelines." />
          </ListItemStyled>
          <ListItemStyled>
            <ListItemText primary="Maintain good personal hygiene and cleanliness while on duty." />
          </ListItemStyled>
          <ListItemStyled>
            <ListItemText primary="Avoid wearing jewelry or accessories that could interfere with patient care." />
          </ListItemStyled>
        </List>
      </Box>

      <Box mb={3}>
        <SectionTitle variant="h6" gutterBottom>
          6. Professional Development and Training
        </SectionTitle>
        <Typography variant="body1" paragraph>
          Staff members are encouraged to participate in ongoing training and professional development activities to ensure that their skills remain current and effective.
        </Typography>
        <List>
          <ListItemStyled>
            <ListItemText primary="Participate in required training programs and certifications." />
          </ListItemStyled>
          <ListItemStyled>
            <ListItemText primary="Engage in continuous learning to enhance skills and knowledge." />
          </ListItemStyled>
          <ListItemStyled>
            <ListItemText primary="Attend departmental meetings and updates." />
          </ListItemStyled>
        </List>
      </Box>

      <Box mb={3}>
        <SectionTitle variant="h6" gutterBottom>
          7. Disciplinary Actions
        </SectionTitle>
        <Typography variant="body1" paragraph>
          Non-compliance with hospital policies and procedures can result in disciplinary actions, including warnings, suspension, or termination depending on the severity of the violation.
        </Typography>
        <List>
          <ListItemStyled>
            <ListItemText primary="Failure to comply with hospital policies may lead to disciplinary actions." />
          </ListItemStyled>
          <ListItemStyled>
            <ListItemText primary="Repeated violations may result in suspension or termination." />
          </ListItemStyled>
          <ListItemStyled>
            <ListItemText primary="Serious misconduct will result in immediate review and potential dismissal." />
          </ListItemStyled>
        </List>
      </Box>

      <Box mb={3}>
        <SectionTitle variant="h6" gutterBottom>
          8. Respect for Diversity and Inclusion
        </SectionTitle>
        <Typography variant="body1" paragraph>
          The hospital is committed to maintaining a respectful, inclusive, and diverse environment where all staff members are treated fairly and with dignity.
        </Typography>
        <List>
          <ListItemStyled>
            <ListItemText primary="Treat all colleagues, patients, and visitors with respect regardless of their background." />
          </ListItemStyled>
          <ListItemStyled>
            <ListItemText primary="Support diversity initiatives and promote an inclusive work culture." />
          </ListItemStyled>
        </List>
      </Box>

      <Box mb={3}>
        <SectionTitle variant="h6" gutterBottom>
          9. Conflict Resolution
        </SectionTitle>
        <Typography variant="body1" paragraph>
          In case of conflicts, hospital staff should follow the hospital's conflict resolution procedures to address and resolve issues professionally and constructively.
        </Typography>
        <List>
          <ListItemStyled>
            <ListItemText primary="Report conflicts to supervisors or HR for assistance." />
          </ListItemStyled>
          <ListItemStyled>
            <ListItemText primary="Engage in mediation or problem-solving sessions if necessary." />
          </ListItemStyled>
        </List>
      </Box>

      <Typography variant="body1" paragraph>
        These policies are put in place to ensure that all staff members maintain a professional and respectful work environment that promotes quality patient care and safety. All employees are expected to adhere to these rules and guidelines, and failure to do so may result in disciplinary action.
      </Typography>
   
    </Container> 
      {/* Footer Section */}
<Footer />
    </div>
    
  );
}

export default PrivacyPolicy;
