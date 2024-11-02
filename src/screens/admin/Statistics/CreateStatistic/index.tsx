import React, { useState } from "react";
import { TextField, Button, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { Statistic, StatisticInput } from "../../../../libs/types/statistic";
import StatisticsService from "../../../../services/StatisticsService";

interface CreateStatisticProps {
  onCreateSuccess: (statistic: Statistic) => void;
}

const CreateStatistic: React.FC<CreateStatisticProps> = ({ onCreateSuccess }) => {
  const [experience, setExperience] = useState("");
  const [universities, setUniversities] = useState("");
  const [customers, setCustomers] = useState("");
  const [branches, setBranches] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCreateStatistic = async () => {
    try {
      const statisticsService = new StatisticsService();
      const statisticInput: StatisticInput = { experience, universities, customers, branches };

      const newStatistic = await statisticsService.createStatistic(statisticInput);
      onCreateSuccess(newStatistic); // Pass created statistic to parent

      setOpenSnackbar(true); // Show success snackbar

      // Reset form fields
      setExperience("");
      setUniversities("");
      setCustomers("");
      setBranches("");
    } catch (error) {
      console.error("Failed to create statistic:", error);
    }
  };

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  return (
    <div className="create-statistic-form">
      <h3>Create New Statistic</h3>
      <TextField
        label="Experience"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Universities"
        value={universities}
        onChange={(e) => setUniversities(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Customers"
        value={customers}
        onChange={(e) => setCustomers(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Branches"
        value={branches}
        onChange={(e) => setBranches(e.target.value)}
        fullWidth
        margin="normal"
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleCreateStatistic}
        style={{ marginTop: "20px" }}
      >
        Create Statistic
      </Button>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert onClose={handleCloseSnackbar} severity="success" elevation={6} variant="filled">
          Statistic created successfully!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default CreateStatistic;
