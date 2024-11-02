// FaqList.tsx
import React, { useState } from "react";
import { IconButton, TextField, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Faq, FaqUpdate } from "../../../../libs/types/faq";
import "./styles.scss";
import FaqService from "../../../../services/FaqService";

interface FaqListProps {
  faqs: Faq[];
  onEdit: (faq: Faq) => void;
  onRemove: (faqId: string) => void;
}

const FaqList: React.FC<FaqListProps> = ({ faqs, onEdit, onRemove }) => {
  const [editingFaq, setEditingFaq] = useState<Faq | null>(null);

  const handleEditClick = (faq: Faq) => {
    setEditingFaq(faq);
  };

  const handleCancelEdit = () => {
    setEditingFaq(null);
  };

  const handleSaveEdit = async () => {
    if (editingFaq) {
      try {
        const faqService = new FaqService();

        const faqUpdate: FaqUpdate = {
          _id: editingFaq._id,
          faqStatus: editingFaq.faqStatus,
          faqTitle: editingFaq.faqTitle,
          faqContent: editingFaq.faqContent,
        };

        const updatedFaq = await faqService.updateFaq(editingFaq._id, faqUpdate);
        onEdit(updatedFaq);
        setEditingFaq(null);
      } catch (error) {
        console.error("Failed to update FAQ:", error);
      }
    }
  };

  return (
    <div className="faq-list-table">
      {!editingFaq ? (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Content</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {faqs.map((faq, index) => (
              <tr key={faq._id}>
                <td>{index + 1}</td>
                <td>{faq.faqTitle}</td>
                <td>{faq.faqContent}</td>
                <td className="faq-actions">
                  <IconButton
                    onClick={() => handleEditClick(faq)}
                    aria-label="edit"
                    color="primary"
                    className="icon-button"
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    onClick={() => onRemove(faq._id)}
                    aria-label="delete"
                    color="secondary"
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
        <div className="edit-faq-form">
          <h3>Edit FAQ</h3>
          <TextField
            label="Title"
            value={editingFaq.faqTitle}
            onChange={(e) =>
              setEditingFaq({ ...editingFaq, faqTitle: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Content"
            value={editingFaq.faqContent}
            onChange={(e) =>
              setEditingFaq({
                ...editingFaq,
                faqContent: e.target.value,
              })
            }
            fullWidth
            margin="normal"
          />
          <div className="edit-buttons">
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

export default FaqList;
