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

  const handleEditClick = (customer: Customer) => {
    setEditingCustomer(customer);
  };

  const handleCancelEdit = () => {
    setEditingCustomer(null);
  };

  const handleSaveEdit = async () => {
    if (editingCustomer) {
      try {
        const customerService = new CustomerService();
        const customerUpdateInput: CustomerUpdateInput = {
          _id: editingCustomer._id,
          name: editingCustomer.name,
          role: editingCustomer.role,
          description: editingCustomer.description,
          video: editingCustomer.video, // Now updated via YouTube URL text field
        };

        const updatedCustomer = await customerService.updateCustomer(
          editingCustomer._id,
          customerUpdateInput
        );

        onEdit(updatedCustomer);
        setEditingCustomer(null);
      } catch (error) {
        console.error("Failed to update customer:", error);
      }
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
              {/* <th>Role</th> */}
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={customer._id}>
                <td>{index + 1}</td>
                <td>{customer.name}</td>
                {/* <td>{customer.role}</td> */}
                <td>{customer.description || "N/A"}</td>
                <td className="customer-actions">
                  <IconButton
                    onClick={() => handleEditClick(customer)}
                    aria-label="edit"
                    color="primary"
                    style={{
                      padding: "4px",
                      fontSize: "small",
                      backgroundColor: "transparent",
                    }}
                    className="icon-button"
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    onClick={() => onRemove(customer._id)}
                    aria-label="delete"
                    color="secondary"
                    style={{
                      padding: "4px",
                      fontSize: "small",
                      backgroundColor: "transparent",
                    }}
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
          <TextField
            label="YouTube Video URL"
            value={editingCustomer.video || ""}
            onChange={(e) =>
              setEditingCustomer({ ...editingCustomer, video: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          <div className="edit-buttons" style={{ display: "flex", gap: "20px" }}>
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

export default CustomerList;
