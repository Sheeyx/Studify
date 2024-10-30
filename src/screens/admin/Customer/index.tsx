import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Customer } from "../../../libs/types/customer";
import CustomerList from "./CustomerList.tsx";
import CustomerService from "../../../services/CustomerSevice";


const ParentComponent: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);


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

  return (
    <div>
      <h2>Customer List</h2>
      <CustomerList customers={customers} onEdit={handleEdit} onRemove={handleRemove} />
    </div>
  );
};

export default ParentComponent;
