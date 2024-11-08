import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./styles.scss";

const MobileAccordion: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="accordion-container">
      <Accordion
        className={`accordion-item ${expanded === 'panel1' ? 'active' : ''}`}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Consultation + Program</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Details about the consultation and program go here.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className={`accordion-item ${expanded === 'panel2' ? 'active' : ''}`}
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Application process</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Once you've decided on your program, we handle the paperwork and guide you through the detailed application process.
          </Typography>
          <Typography className="section-title">Document Preparation:</Typography>
          <Typography>
            We assist you in gathering all required documents, including transcripts, letters of recommendation, and personal statements.
          </Typography>
          <Typography className="section-title">Application Submission:</Typography>
          <Typography>
            Our team ensures your application is accurate, complete, and submitted within deadlines, increasing your chances of acceptance.
          </Typography>
          <Typography className="section-title">Application Tracking:</Typography>
          <Typography>
            We maintain communication with the university and keep you updated on the progress of your application.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className={`accordion-item ${expanded === 'panel3' ? 'active' : ''}`}
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Admission</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Admission details go here.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className={`accordion-item ${expanded === 'panel4' ? 'active' : ''}`}
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Visa application</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Information about the visa application process goes here.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className={`accordion-item ${expanded === 'panel5' ? 'active' : ''}`}
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Congratulations 🎉</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Final congratulations message goes here.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MobileAccordion;
