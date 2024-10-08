import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from '@mui/lab';
import { Grid, Typography, Box } from '@mui/material';
import "./styles.scss";

const journeyData = [
  { year: '2019', event: 'Studify was founded', description: 'With our strong network of partner universities, we ensure a high chance of securing your admission, guiding you.' },
  { year: '2020', event: 'Studify was founded', description: 'With our strong network of partner universities, we ensure a high chance of securing your admission, guiding you.' },
  { year: '2021', event: 'Studify was founded', description: 'With our strong network of partner universities, we ensure a high chance of securing your admission, guiding you.' },
  { year: '2022', event: 'Studify was founded', description: 'With our strong network of partner universities, we ensure a high chance of securing your admission, guiding you.' },
  { year: '2023', event: 'Studify was founded', description: 'With our strong network of partner universities, we ensure a high chance of securing your admission, guiding you.' },
  { year: 'Now', event: 'Studify was founded', description: 'With our strong network of partner universities, we ensure a high chance of securing your admission, guiding you.' }
];

const OurJourney = () => {
  const half = Math.ceil(journeyData.length / 2);
  const firstColumn = journeyData.slice(0, half);
  const secondColumn = journeyData.slice(half);

  return (
    <div className='our-journey' style={{ marginTop: 50 }}>
      <Grid container justifyContent="center" spacing={2} style={{ marginTop: 50 }}>
        <Grid item md={6}>
          <Timeline className='time-line'>
            {firstColumn.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent className='text-box'>
                  <Typography color="textSecondary" textAlign={"left"}>{item.year}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  {index < firstColumn.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6">{item.event}</Typography>
                  <Typography>{item.description}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Grid>
        <Grid item md={6}>
          <Timeline className='time-line'>
            {secondColumn.map((item, index) => (
              <TimelineItem key={index} >
                <TimelineOppositeContent className='text-box'>
                  <Typography color="textSecondary" textAlign={"left"}>{item.year}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  {index < secondColumn.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6">{item.event}</Typography>
                  <Typography>{item.description}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Grid>
      </Grid>

      <Grid container justifyContent="space-between" spacing={2} style={{ marginTop: 50 }}>
        <Grid item xs={4} sm={2}>
          <Typography className='numbers' variant="h5" align="center">5+</Typography>
          <Typography className='text-line' variant="body2" align="center">Years experience</Typography>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Typography className='numbers' variant="h5" align="center">20+</Typography>
          <Typography className='text-line' variant="body2" align="center">Partner universities</Typography>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Typography className='numbers' variant="h5" align="center">200+</Typography>
          <Typography className='text-line' variant="body2" align="center">Happy customers</Typography>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Typography className='numbers' variant="h5" align="center">4</Typography>
          <Typography className='text-line' variant="body2" align="center">Branches</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default OurJourney;
