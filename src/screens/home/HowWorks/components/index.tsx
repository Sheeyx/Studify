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
            <Typography>Details about the consultation and program selection.</Typography>
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
            <Typography>Details about the admission process.</Typography>
          </Box>
        )}
        {expanded === 'panel4' && (
          <Box>
            <Typography variant="h6">Visa Application</Typography>
            <Typography>Details about visa application and support.</Typography>
          </Box>
        )}
        {expanded === 'panel5' && (
          <Box>
            <Typography variant="h6">Congratulations 🎉</Typography>
            <Typography>Details about what happens once you're accepted and complete the process.</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
