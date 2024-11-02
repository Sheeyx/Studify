import React, { useState, useEffect } from "react";
import { Team } from "../../../libs/types/team";
import CreateTeam from "./CreateTeam";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import TeamService from "../../../services/TeamService";
import TeamList from "./TeamList";

const ParentComponent: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCreateClick = () => setIsCreating(true);
  const handleBackClick = () => setIsCreating(false);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const teamService = new TeamService();
        const teamData = await teamService.getTeams();
        setTeams(teamData);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchTeams();
  }, []);

  const handleEdit = (updatedTeam: Team) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team._id === updatedTeam._id ? updatedTeam : team
      )
    );
  };

  const handleRemove = async (teamId: string) => {
    try {
      const teamService = new TeamService();
      await teamService.removeTeam(teamId);
      setTeams((prevTeams) => prevTeams.filter((team) => team._id !== teamId));
    } catch (error) {
      console.error("Error removing team member:", error);
    }
  };

  const handleCreateSuccess = (newTeam: Team) => {
    setTeams((prevTeams) => [...prevTeams, newTeam]);
    setIsCreating(false);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  return (
    <div>
      <h2>Team List</h2>
      {!isCreating ? (
        <>
          <button className="create-button" onClick={handleCreateClick}>
            Create
          </button>
          <TeamList teams={teams} onEdit={handleEdit} onRemove={handleRemove} />
        </>
      ) : (
        <>
          <button className="create-button back-button" onClick={handleBackClick}>
            Back
          </button>
          <CreateTeam onCreateSuccess={handleCreateSuccess} />
        </>
      )}

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert onClose={handleCloseSnackbar} severity="success" elevation={6} variant="filled">
          Team member created successfully!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default ParentComponent;
