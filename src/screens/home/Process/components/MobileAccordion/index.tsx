import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import "./styles.scss";

const PANELS = ['panel1', 'panel2', 'panel3', 'panel4', 'panel5'];

const MobileAccordion: React.FC = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="accordion-container">
      {PANELS.map((panel) => {
        const content = t(`steps.${panel}.content`, { returnObjects: true }) as {
          subtitle?: string;
          text: string;
        }[];

        return (
          <Accordion
            key={panel}
            className={`accordion-item ${expanded === panel ? 'active' : ''}`}
            expanded={expanded === panel}
            onChange={handleChange(panel)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{t(`steps.${panel}.title`)}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              {content.map((item, index) => (
                <div key={index}>
                  {item.subtitle && (
                    <Typography className="section-title">{item.subtitle}</Typography>
                  )}
                  <Typography>{item.text}</Typography>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default MobileAccordion;
