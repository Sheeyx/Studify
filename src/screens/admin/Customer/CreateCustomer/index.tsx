import React, { useState } from "react";
import { TextField, Button, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

import { Customer, CustomerInput } from "../../../../libs/types/customer";
import CustomerService from "../../../../services/CustomerSevice";

interface CreateCustomerProps {
  onCreateSuccess: (customer: Customer) => void;
}

const CreateCustomer: React.FC<CreateCustomerProps> = ({ onCreateSuccess }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState<File | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCreateCustomer = async () => {
    try {
      const customerService = new CustomerService();
      const customerInput: CustomerInput = { name, role, description, video: video ? URL.createObjectURL(video) : undefined };
      const newCustomer = await customerService.createCustomer(customerInput);

      onCreateSuccess(newCustomer); // Pass created customer to parent
      setOpenSnackbar(true); // Show success snackbar

      setName("");
      setRole("");
      setDescription("");
      setVideo(null);

    } catch (error) {
      console.error("Failed to create customer:", error);
    }
  };

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
        setVideo(event.target.files[0]);
    }
  };


  const handleCloseSnackbar = () => setOpenSnackbar(false);

  return (
    <div className="create-customer-form">
      <h3>Create New Customer</h3>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" />
      <TextField label="Role" value={role} onChange={(e) => setRole(e.target.value)} fullWidth margin="normal" />
      <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} fullWidth margin="normal" />
      <div className="file-inputs">
        <label htmlFor="video-upload-input">Upload Video:</label>
        <input type="file" id="video-upload-input" accept="video/*" onChange={handleVideoChange} />
        {video && (
              <div className="video-preview">
                <video width="300" controls>
                  <source
                    src={URL.createObjectURL(video)}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
      </div>
      <Button variant="contained" color="primary" onClick={handleCreateCustomer} style={{ marginTop: "20px" }}>
        Create Customer
      </Button>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert onClose={handleCloseSnackbar} severity="success" elevation={6} variant="filled">
          Customer created successfully!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default CreateCustomer;
