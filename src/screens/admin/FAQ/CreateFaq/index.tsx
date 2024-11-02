// CreateFaq.tsx
import React, { useState } from "react";
import { TextField, Button, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { Faq, FaqInput } from "../../../../libs/types/faq"; // Adjust the path according to your project structure
import FaqService from "../../../../services/FaqService"; // Adjust the path according to your project structure

interface CreateFaqProps {
  onCreateSuccess: (faq: Faq) => void;
}

const CreateFaq: React.FC<CreateFaqProps> = ({ onCreateSuccess }) => {
  const [faqTitle, setFaqTitle] = useState("");
  const [faqContent, setFaqContent] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCreateFaq = async () => {
    try {
      const faqService = new FaqService();
      const faqInput: FaqInput = { faqTitle, faqContent };

      const newFaq = await faqService.createFaq(faqInput); // Adjust according to your FaqService implementation
      onCreateSuccess(newFaq); // Pass created FAQ to parent

      setOpenSnackbar(true); // Show success snackbar

      // Reset form fields
      setFaqTitle("");
      setFaqContent("");
    } catch (error) {
      console.error("Failed to create FAQ:", error);
    }
  };

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  return (
    <div className="create-faq-form">
      <h3>Create New FAQ</h3>
      <TextField
        label="Title"
        value={faqTitle}
        onChange={(e) => setFaqTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Content"
        value={faqContent}
        onChange={(e) => setFaqContent(e.target.value)}
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleCreateFaq}
        style={{ marginTop: "20px" }}
      >
        Create FAQ
      </Button>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert onClose={handleCloseSnackbar} severity="success" elevation={6} variant="filled">
          FAQ created successfully!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default CreateFaq;
