import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Box,
  Grid,
  CircularProgress,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './styles.scss';
import { Faq } from '../../../libs/types/faq';
import FaqService from '../../../services/FaqService';
import { useGlobals } from '../../../app/hooks/useGlobals';

const FAQ: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { handleOpenModal } = useGlobals(); // 👈 Grab modal open function

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const faqService = new FaqService();
        const fetchedFaqs: Faq[] = await faqService.getFaqs();
        setFaqs(fetchedFaqs);
      } catch (err) {
        setError('Failed to load FAQs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box className="faq container" sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom className="heading">
        FAQs
      </Typography>
      <Typography variant="subtitle1" gutterBottom className="text">
        Quick answers for frequently asked questions
      </Typography>

      <Grid container spacing={4}>
        {/* Left Column: FAQ Accordion */}
        <Grid item xs={12} md={6} mt={4}>
          <Box sx={{ marginBottom: '2rem' }}>
            {loading ? (
              <CircularProgress />
            ) : error ? (
              <Typography color="error">{error}</Typography>
            ) : (
              faqs.map((faq, index) => {
                const panelId = `panel${index}`;
                return (
                  <Accordion
                    key={faq._id}
                    expanded={expanded === panelId}
                    onChange={handleChange(panelId)}
                    sx={{
                      marginBottom: '1rem',
                      padding: '10px',
                      borderRadius: '20px !important',
                      overflow: 'hidden',
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === panelId ? (
                          <RemoveIcon style={{ border: '2px solid rgba(94, 106, 109, 0.7)', borderRadius: '50%' }} />
                        ) : (
                          <AddIcon style={{ border: '2px solid rgba(94, 106, 109, 0.7)', borderRadius: '50%' }} />
                        )
                      }
                      aria-controls={`${panelId}-content`}
                      id={`${panelId}-header`}
                    >
                      <Typography sx={{ color: '#173B45' }}>Q: {faq.faqTitle}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ color: '#5E6A6D' }}>
                        <span style={{ color: '#173B45' }}>A:</span> {faq.faqContent}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })
            )}
          </Box>
        </Grid>

        {/* Right Column: Contact Us Button */}
        <Grid item xs={12} md={6} mt={4}>
          <Box className="contact-us">
            <Typography variant="h6" gutterBottom>
              Can’t find your answer?
            </Typography>
            <Button
              onClick={handleOpenModal} // ✅ Trigger global modal
              variant="contained"
              sx={{
                marginTop: '12px',
                backgroundColor: '#FF7F00',
                borderRadius: '20px',
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
