import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ApplicationSteps() {
  const [expanded, setExpanded] = useState('panel2'); // Default expanded panel
  
  const handleChange = (panel: React.SetStateAction<any>) => (event:any, isExpanded:any) => {
    setExpanded(isExpanded ? panel : panel);
  };

  return (
    <Box className = "application-steps">
      <Box className = "accordion">
        <Accordion className={expanded === 'panel1' ? "active-panel" : "panel"} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Consultation + Program</Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion className={expanded === 'panel2' ? "active-panel" : "panel"} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Application Process</Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion className={expanded === 'panel3' ? "active-panel" : "panel"} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Admission</Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion className={expanded === 'panel4' ? "active-panel" : "panel"} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Visa application</Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion className={expanded === 'panel5' ? "active-panel" : "panel"} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Congratulations 🎉</Typography>
          </AccordionSummary>
        </Accordion>
      </Box>

      {/* Right Panel (Detailed Information) */}
      <Box className = "show-panel" sx={{ width: '55%', padding: '16px', backgroundColor: '#FFFFFF', borderRadius: '8px' }}>
        {expanded === 'panel1' && (
          <Box>
            <Typography variant="h6">Consultation + Program</Typography>
            <Typography sx={{ fontWeight: 'bold', marginTop: '16px' }}>Free Consultation</Typography>
            <Typography>Receive expert advice and personalized guidance at no cost. We help you make well-informed decisions tailored to your educational goals, ensuring clarity before you take the next step in your academic journey.</Typography>
            <Typography sx={{ fontWeight: 'bold', marginTop: '16px' }}>Guaranteed Admission:</Typography>
            <Typography>
            With our extensive network of reputable partner universities, we maximize your chances of acceptance. From selecting the right program to finalizing your admission, we stand by your side, making every step smoother and more successful.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', marginTop: '16px' }}>A to Z Support:</Typography>
            <Typography>From your first consultation to your arrival on campus, we cover it all. Our comprehensive support includes visa application, document submission, and even a warm welcome at the airport. We ensure that your transition to studying abroad is seamless and stress-free.</Typography>
          </Box>
        )}
        {expanded === 'panel2' && (
          <Box>
            <Typography variant="h6">Application Process</Typography>
            <Typography>
              Once you've decided on your program, we handle the paperwork and guide you through the detailed application process.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', marginTop: '16px' }}>Document Preparation:</Typography>
            <Typography>We assist you in gathering all required documents, including transcripts, letters of recommendation, and personal statements.</Typography>
            <Typography sx={{ fontWeight: 'bold', marginTop: '16px' }}>Application Submission:</Typography>
            <Typography>
              Our team ensures your application is accurate, complete, and submitted within deadlines, increasing your chances of acceptance.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', marginTop: '16px' }}>Application Tracking:</Typography>
            <Typography>We maintain communication with the university and keep you updated on the progress of your application.</Typography>
          </Box>
        )}
        {expanded === 'panel3' && (
          <Box>
            <Typography variant="h6">Admission</Typography>
            <Typography>Once the ideal program is chosen, we move to the application process. Our team is here to help you every step of the way, from preparing required documents to filling out the application forms. We thoroughly review your materials to make sure everything is complete and meets the university’s standards. By offering insights and advice on application essays, recommendation letters, and additional requirements, we boost your chances of acceptance. We maintain close communication with our partner universities, ensuring a smooth and timely submission of your application. With our support, you can approach this critical phase with confidence.</Typography>
          </Box>
        )}
        {expanded === 'panel4' && (
          <Box>
            <Typography variant="h6">Visa Application</Typography>
            <Typography>Securing a visa is one of the most important steps in your international education journey. After you've received your admission letter, we help guide you through the entire visa application process. We provide detailed instructions on the necessary documents, assist you in completing forms, and ensure that all legal and procedural requirements are met. Our team offers preparation tips for visa interviews and keeps you updated on any changes or additional information requested by the embassy. We understand how stressful this stage can be, which is why we handle the complexities, allowing you to focus on getting ready for your new life abroad.</Typography>
          </Box>
        )}
        {expanded === 'panel5' && (
          <Box>
            <Typography variant="h6">Congratulations 🎉</Typography>
            <Typography>Once your admission is confirmed and your visa is approved, it's time to celebrate the beginning of a new chapter in your life! You are now officially on your way to studying abroad, and we're here to ensure your final steps are as smooth as possible. Our support doesn’t stop at paperwork; we assist with pre-departure arrangements, providing guidance on travel, accommodation, and cultural orientation. Upon arrival, we offer services like airport pickup and help you settle into your new environment. From start to finish, Studify stands by you to make sure your transition is seamless. Your success is our celebration!</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
