import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Box,
  Grid
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import "./styles.scss";

const FAQ: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box className="faq container" sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom className='heading'>
        FAQs
      </Typography>
      <Typography variant="subtitle1" gutterBottom className='text'>
        Quick answers for frequently asked questions
      </Typography>

      {/* Grid Layout */}
      <Grid container spacing={4}>
        {/* Left Column: FAQ Section */}
        <Grid item xs={12} md={6} mt={4}>
          <Box sx={{ marginBottom: '2rem' }}>
            {[1, 2, 3, 4, 5].map((item, index) => {
              const panelId = `panel${item}`;
              return (
                <Accordion
                  key={index}
                  expanded={expanded === panelId}
                  onChange={handleChange(panelId)}
                  sx={{
                    marginBottom: '1rem',
                    padding: "10px",
                    borderRadius: '20px !important',
                    overflow: 'hidden'
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === panelId ? <RemoveIcon style={{border: "2px solid rgba(94, 106, 109, 0.7)"
                      , borderRadius: "50%"}} /> : <AddIcon style={{border: "2px solid rgba(94, 106, 109, 0.7)"
                        , borderRadius: "50%"}} />
                    }
                    aria-controls={`${panelId}-content`}
                    id={`${panelId}-header`}
                  >
                    <Typography sx={{color: "#173B45"}}> Q: Some random question here?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{color: "#5E6A6D"}}> <span style={{color: "#173B45"}}>A:</span> With our strong network of partner universities, we ensure
                      a high chance of securing your admission, guiding you
                      through every step of the process.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        </Grid>

        {/* Right Column: Contact Us Section */}
        <Grid item xs={12} md={6} mt={4}>
          <Box
          className = "contact-us">
            <Typography variant="h6" gutterBottom>
              Can’t find your answer?
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginTop: "12px",
                backgroundColor: '#FF7F00',
                borderRadius: "20px",
                color: 'white',
                padding: '0.8rem 2rem',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#E67E00',
                },
              }}
            >
              Contact us
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FAQ;
