import axios from "axios";
import { serverApi } from "../libs/types/config";
import { Faq, FaqInput, FaqUpdate } from "../libs/types/faq";

class FaqService {
  private readonly path: string;

  constructor() {
    this.path = `${serverApi}/faq`;
  }

  public async createFaq(input: FaqInput): Promise<Faq> {
    try {
      const result = await axios.post(`${this.path}/create`, input, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("createFaq", result);
      return result.data;
    } catch (err) {
      console.log("Error createFaq", err);
      throw err;
    }
  }

  public async getFaqs(): Promise<Faq[]> {
    try {
      const result = await axios.get(`${this.path}/all`, {
        withCredentials: true,
      });
      console.log("getFaqs", result);
      return result.data;
    } catch (err) {
      console.log("Error getFaqs", err);
      throw err;
    }
  }

  public async getFaqById(id: string): Promise<Faq> {
    try {
      const result = await axios.get(`${this.path}/${id}`, {
        withCredentials: true,
      });
      console.log("getFaqById", result);
      return result.data;
    } catch (err) {
      console.log("Error getFaqById", err);
      throw err;
    }
  }

  public async updateFaq(id: string, input: FaqUpdate): Promise<Faq> {
    try {
      const result = await axios.post(`${this.path}/update/${id}`, input, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("updateFaq", result);
      return result.data;
    } catch (err) {
      console.log("Error updateFaq", err);
      throw err;
    }
  }

  public async removeFaq(id: string): Promise<void> {
    try {
      const result = await axios.post(`${this.path}/remove/${id}`, {}, {
        withCredentials: true,
      });
      console.log("removeFaq", result);
    } catch (err) {
      console.log("Error removeFaq", err);
      throw err;
    }
  }
}

export default FaqService;
