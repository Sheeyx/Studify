import React, { useState, useEffect } from "react";
import { Customer } from "../../../libs/types/customer";

import CreateCustomer from "./CreateCustomer";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import CustomerService from "../../../services/CustomerSevice";
import CustomerList from "./CustomerList";

const ParentComponent: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCreateClick = () => setIsCreating(true);
  const handleBackClick = () => setIsCreating(false);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const customerService = new CustomerService();
        const customerData = await customerService.getCustomers();
        setCustomers(customerData);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchCustomers();
  }, []);

  const handleEdit = (updatedCustomer: Customer) => {
    setCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer._id === updatedCustomer._id ? updatedCustomer : customer
      )
    );
  };

  const handleRemove = async (customerId: string) => {
    try {
      const customerService = new CustomerService();
      await customerService.removeCustomer(customerId);
      setCustomers((prevCustomers) => prevCustomers.filter((c) => c._id !== customerId));
    } catch (error) {
      console.error("Error removing customer:", error);
    }
  };

  const handleCreateSuccess = (newCustomer: Customer) => {
    setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
    setIsCreating(false);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  return (
    <div>
      <h2>Customer List</h2>
      {!isCreating ? (
        <>
          <button className="create-button" onClick={handleCreateClick}>
            Create
          </button>
          <CustomerList customers={customers} onEdit={handleEdit} onRemove={handleRemove} />
        </>
      ) : (
        <>
          <button className="create-button back-button" onClick={handleBackClick}>
            Back
          </button>
          <CreateCustomer onCreateSuccess={handleCreateSuccess} />
        </>
      )}

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert onClose={handleCloseSnackbar} severity="success" elevation={6} variant="filled">
          Customer created successfully!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default ParentComponent;
