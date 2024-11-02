import React, { useState } from "react";
import { IconButton, TextField, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Statistic, StatisticUpdate } from "../../../../libs/types/statistic";
import "./styles.scss";
import StatisticsService from "../../../../services/StatisticsService";

interface StatisticListProps {
  statistics: Statistic[];
  onEdit: (statistic: Statistic) => void;
  onRemove: (statisticId: string) => void;
}

const StatisticList: React.FC<StatisticListProps> = ({ statistics, onEdit, onRemove }) => {
  const [editingStatistic, setEditingStatistic] = useState<Statistic | null>(null);

  const handleEditClick = (statistic: Statistic) => {
    setEditingStatistic(statistic);
  };

  const handleCancelEdit = () => {
    setEditingStatistic(null);
  };

  const handleSaveEdit = async () => {
    if (editingStatistic) {
      try {
        const statisticService = new StatisticsService();

        // Prepare the input data for the service call
        const statisticUpdate: StatisticUpdate = {
          _id: editingStatistic._id,
          experience: editingStatistic.experience,
          universities: editingStatistic.universities,
          customers: editingStatistic.customers,
          branches: editingStatistic.branches,
        };

        // Call the update service
        const updatedStatistic = await statisticService.updateStatistic(editingStatistic._id, statisticUpdate);

        onEdit(updatedStatistic); // Pass updated statistic to the parent
        setEditingStatistic(null);
      } catch (error) {
        console.error("Failed to update statistic:", error);
      }
    }
  };

  return (
    <div className="statistic-list-table">
      {!editingStatistic ? (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Experience</th>
              <th>Universities</th>
              <th>Customers</th>
              <th>Branches</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {statistics.map((statistic, index) => (
              <tr key={statistic._id}>
                <td>{index + 1}</td>
                <td>{statistic.experience}</td>
                <td>{statistic.universities}</td>
                <td>{statistic.customers}</td>
                <td>{statistic.branches}</td>
                <td className="statistic-actions">
                  <IconButton
                    onClick={() => handleEditClick(statistic)}
                    aria-label="edit"
                    color="primary"
                    className="icon-button"
                    style={{ padding: "4px", backgroundColor: "transparent" }}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    onClick={() => onRemove(statistic._id)}
                    aria-label="delete"
                    color="secondary"
                    className="icon-button"
                    style={{ padding: "4px", backgroundColor: "transparent" }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="edit-statistic-form">
          <h3>Edit Statistic</h3>
          <TextField
            label="Experience"
            value={editingStatistic.experience}
            onChange={(e) =>
              setEditingStatistic({ ...editingStatistic, experience: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Universities"
            value={editingStatistic.universities}
            onChange={(e) =>
              setEditingStatistic({ ...editingStatistic, universities: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Customers"
            value={editingStatistic.customers}
            onChange={(e) =>
              setEditingStatistic({ ...editingStatistic, customers: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Branches"
            value={editingStatistic.branches}
            onChange={(e) =>
              setEditingStatistic({ ...editingStatistic, branches: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          <div className="edit-buttons">
            <Button
              variant="text"
              style={{ color: "white", backgroundColor: "#ff8225", width: "80px", textTransform: "none" }}
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

export default StatisticList;
