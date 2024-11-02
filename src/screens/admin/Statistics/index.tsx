import React, { useState, useEffect } from "react";
import { Statistic } from "../../../libs/types/statistic";
import CreateStatistic from "./CreateStatistic";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import StatisticsService from "../../../services/StatisticsService";
import StatisticList from "./StatisticList";

const StatisticParentComponent: React.FC = () => {
  const [statistics, setStatistics] = useState<Statistic[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCreateClick = () => setIsCreating(true);
  const handleBackClick = () => setIsCreating(false);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const statisticsService = new StatisticsService();
        const statisticData = await statisticsService.getStatistics();
        setStatistics(statisticData);
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };

    fetchStatistics();
  }, []);

  const handleEdit = (updatedStatistic: Statistic) => {
    setStatistics((prevStatistics) =>
      prevStatistics.map((statistic) =>
        statistic._id === updatedStatistic._id ? updatedStatistic : statistic
      )
    );
  };

  const handleRemove = async (statisticId: string) => {
    try {
      const statisticsService = new StatisticsService();
      await statisticsService.removeStatistic(statisticId);
      setStatistics((prevStatistics) =>
        prevStatistics.filter((statistic) => statistic._id !== statisticId)
      );
    } catch (error) {
      console.error("Error removing statistic:", error);
    }
  };

  const handleCreateSuccess = (newStatistic: Statistic) => {
    setStatistics((prevStatistics) => [...prevStatistics, newStatistic]);
    setIsCreating(false);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  return (
    <div>
      <h2>Statistic List</h2>
      {!isCreating ? (
        <>
          <button className="create-button" onClick={handleCreateClick}>
            Create
          </button>
          <StatisticList statistics={statistics} onEdit={handleEdit} onRemove={handleRemove} />
        </>
      ) : (
        <>
          <button className="create-button back-button" onClick={handleBackClick}>
            Back
          </button>
          <CreateStatistic onCreateSuccess={handleCreateSuccess} />
        </>
      )}

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert onClose={handleCloseSnackbar} severity="success" elevation={6} variant="filled">
          Statistic created successfully!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default StatisticParentComponent;
