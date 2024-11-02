import React, { useState } from "react";
import { IconButton, TextField, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Team, TeamUpdateInput } from "../../../../libs/types/team";
import "./styles.scss";
import TeamService from "../../../../services/TeamService";

interface TeamListProps {
  teams: Team[];
  onEdit: (team: Team) => void;
  onRemove: (teamId: string) => void;
}

const TeamList: React.FC<TeamListProps> = ({ teams, onEdit, onRemove }) => {
  const [editingTeam, setEditingTeam] = useState<Team | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleEditClick = (team: Team) => {
    setEditingTeam(team);
    setImageFile(null); // Reset image file on new edit click
  };

  const handleCancelEdit = () => {
    setEditingTeam(null);
    setImageFile(null);
  };

  const handleSaveEdit = async () => {
    if (editingTeam) {
      try {
        const teamService = new TeamService();

        // Prepare the input data for the service call
        const teamUpdateInput: TeamUpdateInput = {
          _id: editingTeam._id,
          name: editingTeam.name,
          role: editingTeam.role,
          description: editingTeam.description,
        };

        // Call the update service
        const updatedTeam = await teamService.updateTeam(
          editingTeam._id,
          teamUpdateInput,
          imageFile ?? undefined
        );

        onEdit(updatedTeam); // Pass updated team to the parent
        setEditingTeam(null);
        setImageFile(null);
      } catch (error) {
        console.error("Failed to update team member:", error);
      }
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImageFile(event.target.files[0]);
    }
  };

  return (
    <div className="team-list-table">
      {!editingTeam ? (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Role</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={team._id}>
                <td>{index + 1}</td>
                <td>{team.name}</td>
                <td>{team.role}</td>
                <td>{team.description || "N/A"}</td>
                <td className="team-actions">
                  <IconButton
                    onClick={() => handleEditClick(team)}
                    aria-label="edit"
                    color="primary"
                    style={{
                        padding: "4px", // Smaller padding
                        fontSize: "small", // Adjust icon size
                        backgroundColor: "transparent",
                      }}
                    className="icon-button"
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    onClick={() => onRemove(team._id)}
                    aria-label="delete"
                    color="secondary"
                    style={{
                        padding: "4px",
                        fontSize: "small",
                        backgroundColor: "transparent",
                      }}
                    className="icon-button"
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="edit-team-form">
          <h3>Edit Team Member</h3>
          <TextField
            label="Name"
            value={editingTeam.name}
            onChange={(e) =>
              setEditingTeam({ ...editingTeam, name: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Role"
            value={editingTeam.role}
            onChange={(e) =>
              setEditingTeam({ ...editingTeam, role: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={editingTeam.description || ""}
            onChange={(e) =>
              setEditingTeam({
                ...editingTeam,
                description: e.target.value,
              })
            }
            fullWidth
            margin="normal"
          />
          <div className="image-upload">
            <label htmlFor="image-upload-input">Upload Image:</label>
            <input
              type="file"
              id="image-upload-input"
              accept="image/*"
              onChange={handleImageChange}
            />
            {imageFile && (
              <div className="image-preview">
                <img
                  src={URL.createObjectURL(imageFile)}
                  alt="Preview"
                  width="100"
                />
              </div>
            )}
          </div>
          <div className="edit-buttons" style={{  display: "flex",gap: "20px" }}>
            <Button
              variant="text"
              style={{
                color: "white",
                backgroundColor: "#ff8225",
                width: "80px",
                textTransform: "none", // Keeps the text in normal case
              }}
              onClick={handleSaveEdit}
            >
              Save
            </Button>
            <Button
              style={{ color: "black", width: "80px" }}
              onClick={handleCancelEdit}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamList;
