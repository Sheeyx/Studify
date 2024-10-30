import axios from "axios";
import { serverApi } from "../libs/types/config";
import { Customer, CustomerInput, CustomerUpdateInput } from "../libs/types/customer";


class CustomerService {
  private readonly path: string;

  constructor() {
    this.path = `${serverApi}/customer`;
  }

  public async createCustomer(input: CustomerInput, image?: File): Promise<Customer> {
    try {
      const formData = new FormData();
      formData.append("name", input.name);
      formData.append("role", input.role);
      if (input.video) formData.append("video", input.video);
      if (input.description) formData.append("description", input.description);
      if (image) formData.append("image", image);

      const result = await axios.post(`${this.path}/create`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("createCustomer", result);
      return result.data;
    } catch (err) {
      console.log("Error createCustomer", err);
      throw err;
    }
  }

  public async getCustomers(): Promise<Customer[]> {
    try {
     
      const result = await axios.get(`${this.path}/all`, {
        withCredentials: true,
      });
      console.log("getAllCustomers", result);
      return result.data;
    } catch (err) {
      console.log("Error getAllCustomers", err);
      throw err;
    }
  }
  

  public async getCustomerById(id: string): Promise<Customer> {
    try {
      const result = await axios.get(`${this.path}/${id}`, { withCredentials: true });
      console.log("getCustomerById", result);
      return result.data;
    } catch (err) {
      console.log("Error getCustomerById", err);
      throw err;
    }
  }

  public async updateCustomer(id: string, input: CustomerUpdateInput, video?: File): Promise<Customer> {
    try {
      const formData = new FormData();
      formData.append("name", input.name ?? "");
      formData.append("role", input.role ?? "");
      if (input.video) formData.append("video", input.video);
      if (input.description) formData.append("description", input.description);
      if (video) formData.append("video", video);

      const result = await axios.post(`${this.path}/update/${id}`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("updateCustomer", result);
      return result.data;
    } catch (err) {
      console.log("Error updateCustomer", err);
      throw err;
    }
  }

  public async removeCustomer(id: string): Promise<void> {
    try {
      const result = await axios.post(`${this.path}/remove/${id}`, {}, { withCredentials: true });
      console.log("removeCustomer", result);
    } catch (err) {
      console.log("Error removeCustomer", err);
      throw err;
    }
  }
}

export default CustomerService;
