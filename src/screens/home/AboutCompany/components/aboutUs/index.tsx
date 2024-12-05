import React from 'react';
import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineDot, 
  TimelineConnector, 
  TimelineContent, 
  TimelineOppositeContent 
} from '@mui/lab';
import { Grid, Typography } from '@mui/material';
import "./styles.scss";

const journeyData = [
  { year: '2019', event: 'Founded', description: 'Studify was established to connect students with global educational opportunities.' },
  { year: '2020', event: 'First Milestone', description: 'Studify successfully partnered with 10+ universities worldwide.' },
  { year: '2021', event: 'Expanding Reach', description: 'We expanded our operations to multiple countries.' },
  { year: '2022', event: 'Improving Access', description: 'Introduced new services to enhance student experiences.' },
  { year: '2023', event: 'Recognition', description: 'Studify was recognized as a leading platform for student success.' },
  { year: 'Now', event: 'Looking Ahead', description: 'Continuing our journey to empower students globally.' }
];

const OurJourney = () => {
  const half = Math.ceil(journeyData.length / 2);
  const firstColumn = journeyData.slice(0, half);
  const secondColumn = journeyData.slice(half);

  return (
    <div className="our-journey" style={{ marginTop: 50 }}>
      <Grid container justifyContent="center" spacing={2} style={{ marginTop: 50 }}>
        {/* First Column */}
        <Grid item md={6}>
          <Timeline className="time-line">
            {firstColumn.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent className="text-box">
                  <Typography color="textSecondary" textAlign="left">{item.year}</Typography>
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

        {/* Second Column */}
        <Grid item md={6}>
          <Timeline className="time-line">
            {secondColumn.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent className="text-box">
                  <Typography color="textSecondary" textAlign="left">{item.year}</Typography>
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

      {/* Stats Section */}
      <Grid container justifyContent="space-between" spacing={2} style={{ marginTop: 50 }}>
        {[
          { number: "5+", label: "Years of Experience" },
          { number: "20+", label: "Partner Universities" },
          { number: "200+", label: "Happy Customers" },
          { number: "4", label: "Branches" }
        ].map((stat, index) => (
          <Grid key={index} item xs={12} sm={6} md={2}>
            <Typography className="numbers" variant="h5" align="center">{stat.number}</Typography>
            <Typography className="text-line" variant="body2" align="center">{stat.label}</Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OurJourney;
