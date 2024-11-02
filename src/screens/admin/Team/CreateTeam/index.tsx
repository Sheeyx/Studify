import React, { useState } from "react";
import { TextField, Button, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

import { Team, TeamInput } from "../../../../libs/types/team";
import TeamService from "../../../../services/TeamService";

interface CreateTeamProps {
  onCreateSuccess: (team: Team) => void;
}

const CreateTeam: React.FC<CreateTeamProps> = ({ onCreateSuccess }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCreateTeam = async () => {
    try {
      const teamService = new TeamService();
      const teamInput: TeamInput = { name, role, description };

      const newTeam = await teamService.createTeam(teamInput, image ?? undefined);
      onCreateSuccess(newTeam); // Pass created team member to parent

      setOpenSnackbar(true); // Show success snackbar

      // Reset form fields
      setName("");
      setRole("");
      setDescription("");
      setImage(null);
    } catch (error) {
      console.error("Failed to create team member:", error);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  return (
    <div className="create-team-form">
      <h3>Create New Team Member</h3>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" />
      <TextField label="Role" value={role} onChange={(e) => setRole(e.target.value)} fullWidth margin="normal" />
      <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} fullWidth margin="normal" />
      
      <div className="file-inputs">
        <label htmlFor="image-upload-input">Upload Image:</label>
        <input type="file" id="image-upload-input" accept="image/*" onChange={handleImageChange} />
        {image && (
          <div className="image-preview">
            <img src={URL.createObjectURL(image)} alt="Preview" width="100" />
          </div>
        )}
      </div>

      <Button variant="contained" color="primary" onClick={handleCreateTeam} style={{ marginTop: "20px" }}>
        Create Team Member
      </Button>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert onClose={handleCloseSnackbar} severity="success" elevation={6} variant="filled">
          Team member created successfully!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default CreateTeam;
