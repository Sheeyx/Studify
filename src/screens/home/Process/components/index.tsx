import React, { useState } from 'react';
import { Accordion, AccordionSummary, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';

const PANELS = ['panel1', 'panel2', 'panel3', 'panel4', 'panel5'];

export default function ApplicationSteps() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState('panel2');

  const handleChange = (panel: string) => (_event: any, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : '');
  };

  const content = t(`steps.${expanded}.content`, { returnObjects: true }) as {
    subtitle?: string;
    text: string;
  }[];

  return (
    <Box className="application-steps">
      <Box className="accordion">
        {PANELS.map((panel) => (
          <Accordion
            key={panel}
            className={expanded === panel ? 'active-panel' : 'panel'}
            expanded={expanded === panel}
            onChange={handleChange(panel)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{t(`steps.${panel}.title`)}</Typography>
            </AccordionSummary>
          </Accordion>
        ))}
      </Box>

      <Box className="show-panel" sx={{ width: '55%', padding: '16px', backgroundColor: '#FFFFFF', borderRadius: '8px' }}>
        <Typography variant="h6" className="title">
          {t(`steps.${expanded}.title`)}
        </Typography>

        {content.map((item, index) => (
          <Box key={index} mt={2}>
            {item.subtitle && <Typography sx={{ fontWeight: 'bold' }}>{item.subtitle}</Typography>}
            <Typography>{item.text}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
