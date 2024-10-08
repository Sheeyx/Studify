import React from 'react';
import { Grid, Typography, Card, CardContent } from '@mui/material';
import Photo from "../../../../../assets/uni-photo.jpeg";
import "./styles.scss";

const teamMembers = [
  { name: 'Ayubkhon Hamidov', position: 'CEO and Co-Founder' },
  { name: 'Ayubkhon Hamidov', position: 'CEO and Co-Founder' },
  { name: 'Ayubkhon Hamidov', position: 'CEO and Co-Founder' },
  { name: 'Ayubkhon Hamidov', position: 'CEO and Co-Founder' },
  { name: 'Ayubkhon Hamidov', position: 'CEO and Co-Founder' },
  { name: 'Ayubkhon Hamidov', position: 'CEO and Co-Founder' },
  { name: 'Ayubkhon Hamidov', position: 'CEO and Co-Founder' },
  { name: 'Ayubkhon Hamidov', position: 'CEO and Co-Founder' },
];

const OurTeam = () => {
  return (
    <div className='our-team'>
      <Grid container spacing={2} justifyContent="center" style={{ marginTop: 20 }} className='box'>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} className='card'>
                <img src={Photo} alt="" />
                <Typography variant="h6" align="center">
                  {member.name}
                </Typography>
                <Typography variant="body2" align="center" color="textSecondary">
                  {member.position}
                </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OurTeam;
