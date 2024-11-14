import React, { useEffect, useState } from 'react';
import { Grid, Typography, CircularProgress } from '@mui/material';
import Photo from "../../../../../assets/uni-photo.jpeg";
import "./styles.scss";
import TeamService from '../../../../../services/TeamService';
import { Team } from '../../../../../libs/types/team'; // Adjust path as necessary
import { serverApi } from '../../../../../libs/types/config';

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeams = async () => {
      setLoading(true);
      setError(null);
      try {
        const teamService = new TeamService();
        const teams = await teamService.getTeams();
        setTeamMembers(teams);
      } catch (err) {
        console.error("Error fetching team members:", err);
        setError("Failed to load team members.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div className='our-team'>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <Grid container spacing={2} justifyContent="center" style={{ marginTop: 20 }} className='box'>
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={3} key={member._id} className='card'>
              <img src={`${`${serverApi}/${member.image}` || Photo}`} alt={member.name} className="team-photo" />
              <Typography variant="h6" align="center">
                {member.name}
              </Typography>
              <Typography variant="body2" align="center" color="textSecondary">
                {member.role}
              </Typography>
              <Typography variant="body2" align="center">
                {member.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default OurTeam;
