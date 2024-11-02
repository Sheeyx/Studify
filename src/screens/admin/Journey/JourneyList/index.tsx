import React, { useState } from "react";
import { IconButton, TextField, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Journey, JourneyUpdate } from "../../../../libs/types/journey";
import "./styles.scss";
import JourneyService from "../../../../services/JourneyService";

interface JourneyListProps {
  journeys: Journey[];
  onEdit: (journey: Journey) => void;
  onRemove: (journeyId: string) => void;
}

const JourneyList: React.FC<JourneyListProps> = ({ journeys, onEdit, onRemove }) => {
  const [editingJourney, setEditingJourney] = useState<Journey | null>(null);

  const handleEditClick = (journey: Journey) => {
    setEditingJourney(journey);
  };

  const handleCancelEdit = () => {
    setEditingJourney(null);
  };

  const handleSaveEdit = async () => {
    if (editingJourney) {
      try {
        const journeyService = new JourneyService();

        // Prepare the input data for the service call
        const journeyUpdate: JourneyUpdate = {
          _id: editingJourney._id,
          journeyYear: editingJourney.journeyYear,
          journeyDesc: editingJourney.journeyDesc,
        };

        // Call the update service
        const updatedJourney = await journeyService.updateJourney(editingJourney._id, journeyUpdate);

        onEdit(updatedJourney); // Pass updated journey to the parent
        setEditingJourney(null);
      } catch (error) {
        console.error("Failed to update journey:", error);
      }
    }
  };

  return (
    <div className="journey-list-table">
      {!editingJourney ? (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Year</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {journeys.map((journey, index) => (
              <tr key={journey._id}>
                <td>{index + 1}</td>
                <td>{journey.journeyYear}</td>
                <td>{journey.journeyDesc || "N/A"}</td>
                <td className="journey-actions">
                  <IconButton
                    onClick={() => handleEditClick(journey)}
                    aria-label="edit"
                    color="primary"
                    style={{
                      padding: "4px",
                      fontSize: "small",
                      backgroundColor: "transparent",
                    }}
                    className="icon-button"
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    onClick={() => onRemove(journey._id)}
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
        <div className="edit-journey-form">
          <h3>Edit Journey</h3>
          <TextField
            label="Year"
            value={editingJourney.journeyYear}
            onChange={(e) =>
              setEditingJourney({ ...editingJourney, journeyYear: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={editingJourney.journeyDesc || ""}
            onChange={(e) =>
              setEditingJourney({
                ...editingJourney,
                journeyDesc: e.target.value,
              })
            }
            fullWidth
            margin="normal"
          />
          <div className="edit-buttons" style={{ display: "flex", gap: "20px" }}>
            <Button
              variant="text"
              style={{
                color: "white",
                backgroundColor: "#ff8225",
                width: "80px",
                textTransform: "none",
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

export default JourneyList;
