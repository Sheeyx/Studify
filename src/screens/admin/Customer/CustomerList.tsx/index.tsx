import React, { useState } from "react";
import { IconButton, TextField, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Customer, CustomerUpdateInput } from "../../../../libs/types/customer";
import "./styles.scss";
import CustomerService from "../../../../services/CustomerSevice";

interface CustomerListProps {
  customers: Customer[];
  onEdit: (customer: Customer) => void;
  onRemove: (customerId: string) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({
  customers,
  onEdit,
  onRemove,
}) => {
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const handleEditClick = (customer: Customer) => {
    setEditingCustomer(customer);
    setVideoFile(null); // Reset video file on new edit click
  };

  const handleCancelEdit = () => {
    setEditingCustomer(null);
    setVideoFile(null);
  };

  const handleSaveEdit = async () => {
    if (editingCustomer) {
      try {
        const customerService = new CustomerService();

        // Prepare the input data for the service call
        const customerUpdateInput: CustomerUpdateInput = {
          _id: editingCustomer._id,
          name: editingCustomer.name,
          role: editingCustomer.role,
          description: editingCustomer.description,
          video: videoFile
            ? URL.createObjectURL(videoFile)
            : editingCustomer.video,
        };

        // Call the update service
        const updatedCustomer = await customerService.updateCustomer(
          editingCustomer._id,
          customerUpdateInput,
          videoFile ?? undefined
        );

        onEdit(updatedCustomer); // Pass updated customer to the parent
        setEditingCustomer(null);
        setVideoFile(null);
      } catch (error) {
        console.error("Failed to update customer:", error);
      }
    }
  };

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setVideoFile(event.target.files[0]);
    }
  };

  return (
    <div className="customer-list-table">
      {!editingCustomer ? (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Role</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={customer._id}>
                <td>{index + 1}</td>
                <td>{customer.name}</td>
                <td>{customer.role}</td>
                <td>{customer.description || "N/A"}</td>
                <td className="customer-actions">
                  <IconButton
                    onClick={() => handleEditClick(customer)}
                    aria-label="edit"
                    color="primary"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => onRemove(customer._id)}
                    aria-label="delete"
                    color="secondary"
                  >
                    <DeleteIcon />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="edit-customer-form">
          <h3>Edit Customer</h3>
          <TextField
            label="Name"
            value={editingCustomer.name}
            onChange={(e) =>
              setEditingCustomer({ ...editingCustomer, name: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Role"
            value={editingCustomer.role}
            onChange={(e) =>
              setEditingCustomer({ ...editingCustomer, role: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={editingCustomer.description || ""}
            onChange={(e) =>
              setEditingCustomer({
                ...editingCustomer,
                description: e.target.value,
              })
            }
            fullWidth
            margin="normal"
          />
          <div className="video-upload">
            <label htmlFor="video-upload-input">Upload Video:</label>
            <input
              type="file"
              id="video-upload-input"
              accept="video/*"
              onChange={handleVideoChange}
            />
            {videoFile && (
              <div className="video-preview">
                <video width="300" controls>
                  <source
                    src={URL.createObjectURL(videoFile)}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
          <div className="edit-buttons" style={{  display: "flex",gap: "20px" }}>
            <Button
              variant="text"
              style={{
                color: "white",
                backgroundColor: "#ff8225",
                width: "80px",
                textTransform: "none", // Keeps the text in normal case
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

export default CustomerList;
