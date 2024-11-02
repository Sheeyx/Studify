import React, { useState, useEffect } from "react";
import { Journey } from "../../../libs/types/journey";
import CreateJourney from "./CreateJourney";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import JourneyService from "../../../services/JourneyService";
import JourneyList from "./JourneyList";

const JourneyParentComponent: React.FC = () => {
  const [journeys, setJourneys] = useState<Journey[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCreateClick = () => setIsCreating(true);
  const handleBackClick = () => setIsCreating(false);

  useEffect(() => {
    const fetchJourneys = async () => {
      try {
        const journeyService = new JourneyService();
        const journeyData = await journeyService.getJourneys();
        setJourneys(journeyData);
      } catch (error) {
        console.error("Error fetching journeys:", error);
      }
    };

    fetchJourneys();
  }, []);

  const handleEdit = (updatedJourney: Journey) => {
    setJourneys((prevJourneys) =>
      prevJourneys.map((journey) =>
        journey._id === updatedJourney._id ? updatedJourney : journey
      )
    );
  };

  const handleRemove = async (journeyId: string) => {
    try {
      const journeyService = new JourneyService();
      await journeyService.removeJourney(journeyId);
      setJourneys((prevJourneys) => prevJourneys.filter((journey) => journey._id !== journeyId));
    } catch (error) {
      console.error("Error removing journey:", error);
    }
  };

  const handleCreateSuccess = (newJourney: Journey) => {
    setJourneys((prevJourneys) => [...prevJourneys, newJourney]);
    setIsCreating(false);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  return (
    <div>
      <h2>Journey List</h2>
      {!isCreating ? (
        <>
          <button className="create-button" onClick={handleCreateClick}>
            Create
          </button>
          <JourneyList journeys={journeys} onEdit={handleEdit} onRemove={handleRemove} />
        </>
      ) : (
        <>
          <button className="create-button back-button" onClick={handleBackClick}>
            Back
          </button>
          <CreateJourney onCreateSuccess={handleCreateSuccess} />
        </>
      )}

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert onClose={handleCloseSnackbar} severity="success" elevation={6} variant="filled">
          Journey created successfully!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default JourneyParentComponent;
