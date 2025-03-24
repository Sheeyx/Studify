import React, { useEffect, useState } from 'react';
import { Grid, Typography, CircularProgress } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent
} from '@mui/lab';
import "./styles.scss";
import JourneyService from '../../../../../services/JourneyService';
import { Journey } from '../../../../../libs/types/journey'; // Adjust path as necessary

const OurJourney = () => {
  const [journeyData, setJourneyData] = useState<Journey[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJourneyData = async () => {
      try {
        const journeyService = new JourneyService();
        const data = await journeyService.getJourneys();
        setJourneyData(data);
      } catch (err) {
        setError("Failed to load journey data.");
      } finally {
        setLoading(false);
      }
    };
    fetchJourneyData();
  }, []);

  console.log(journeyData, "journeyData");
  
  if (loading) return <CircularProgress style={{ display: 'block', margin: 'auto', marginTop: 50 }} />;
  if (error) return <Typography color="error" align="center">{error}</Typography>;

  const half = Math.ceil(journeyData.length / 2);
  const firstColumn = journeyData.slice(0, half);
  const secondColumn = journeyData.slice(half);

  return (
    <div className="our-journey" style={{ marginTop: 50 }}>
      <Grid container justifyContent="center" spacing={2} style={{ marginTop: 50 }}>
        {/* First Column */}
        <Grid item md={6}>
          <Timeline className="time-line">
            {firstColumn.map((item: Journey, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent className="text-box">
                  <Typography color="textSecondary" textAlign="left">{item.journeyYear}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot style={{ backgroundColor: index === 0 ? '#FF8225' : '' }} />
                  {index < firstColumn.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" style={{ marginTop: "-5px" }}>{item.journeyTitle}</Typography>
                  <Typography>{item.journeyDesc}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Grid>

        {/* Second Column */}
        <Grid item md={6}>
          <Timeline className="time-line">
            {secondColumn.map((item: Journey, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent className="text-box">
                  <Typography color="textSecondary" textAlign="left">{item.journeyYear}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot/>
                  {index < secondColumn.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" style={{ marginTop: "-5px" }}>{item.journeyTitle}</Typography>
                  <Typography>{item.journeyDesc}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Grid>
      </Grid>
    </div>
  );
};

export default OurJourney;
