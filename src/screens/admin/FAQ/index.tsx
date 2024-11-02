// FaqParentComponent.tsx
import React, { useState, useEffect } from "react";
import { Faq } from "../../../libs/types/faq";
import CreateFaq from "./CreateFaq";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import FaqService from "../../../services/FaqService";
import FaqList from "./FaqList";

const FaqParentComponent: React.FC = () => {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCreateClick = () => setIsCreating(true);
  const handleBackClick = () => setIsCreating(false);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const faqService = new FaqService();
        const faqData = await faqService.getFaqs();
        setFaqs(faqData);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };

    fetchFaqs();
  }, []);

  const handleEdit = (updatedFaq: Faq) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq) =>
        faq._id === updatedFaq._id ? updatedFaq : faq
      )
    );
  };

  const handleRemove = async (faqId: string) => {
    try {
      const faqService = new FaqService();
      await faqService.removeFaq(faqId);
      setFaqs((prevFaqs) => prevFaqs.filter((faq) => faq._id !== faqId));
    } catch (error) {
      console.error("Error removing FAQ:", error);
    }
  };

  const handleCreateSuccess = (newFaq: Faq) => {
    setFaqs((prevFaqs) => [...prevFaqs, newFaq]);
    setIsCreating(false);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  return (
    <div>
      <h2>FAQ List</h2>
      {!isCreating ? (
        <>
          <button className="create-button" onClick={handleCreateClick}>
            Create
          </button>
          <FaqList faqs={faqs} onEdit={handleEdit} onRemove={handleRemove} />
        </>
      ) : (
        <>
          <button className="create-button back-button" onClick={handleBackClick}>
            Back
          </button>
          <CreateFaq onCreateSuccess={handleCreateSuccess} />
        </>
      )}

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert onClose={handleCloseSnackbar} severity="success" elevation={6} variant="filled">
          FAQ created successfully!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default FaqParentComponent;
