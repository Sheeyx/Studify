import React, { useState } from "react";
import { TextField, Button, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { Journey, JourneyInput } from "../../../../libs/types/journey";
import JourneyService from "../../../../services/JourneyService";

interface CreateJourneyProps {
  onCreateSuccess: (journey: Journey) => void;
}

const CreateJourney: React.FC<CreateJourneyProps> = ({ onCreateSuccess }) => {
  const [journeyTitle, setJourneyTitle] = useState("");
  const [journeyYear, setJourneyYear] = useState("");
  const [journeyDesc, setJourneyDesc] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCreateJourney = async () => {
    try {
      const journeyService = new JourneyService();
      const journeyInput: JourneyInput = { journeyTitle, journeyYear, journeyDesc };

      const newJourney = await journeyService.createJourney(journeyInput);
      onCreateSuccess(newJourney); // Pass created journey to parent

      setOpenSnackbar(true); // Show success snackbar

      // Reset form fields
      setJourneyTitle("");
      setJourneyYear("");
      setJourneyDesc("");
    } catch (error) {
      console.error("Failed to create journey:", error);
    }
  };

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  return (
    <div className="create-journey-form">
      <h3>Create New Journey</h3>
      <TextField
        label="Title"
        value={journeyTitle}
        onChange={(e) => setJourneyTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Year"
        value={journeyYear}
        onChange={(e) => setJourneyYear(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        value={journeyDesc}
        onChange={(e) => setJourneyDesc(e.target.value)}
        fullWidth
        margin="normal"
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleCreateJourney}
        style={{ marginTop: "20px" }}
      >
        Create Journey
      </Button>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert onClose={handleCloseSnackbar} severity="success" elevation={6} variant="filled">
          Journey created successfully!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default CreateJourney;
