import axios from "axios";
import { serverApi } from "../libs/types/config";
import { Journey, JourneyInput, JourneyUpdate } from "../libs/types/journey";

class JourneyService {
  private readonly path: string;

  constructor() {
    this.path = `${serverApi}/journey`;
  }

  public async createJourney(input: JourneyInput): Promise<Journey> {
    try {
      const result = await axios.post(`${this.path}/create`, input, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("createJourney", result);
      return result.data;
    } catch (err) {
      console.log("Error createJourney", err);
      throw err;
    }
  }

  public async getJourneys(): Promise<Journey[]> {
    try {
      const result = await axios.get(`${this.path}/all`, {
        withCredentials: true,
      });
      console.log("getAllJourneys", result);
      return result.data;
    } catch (err) {
      console.log("Error getAllJourneys", err);
      throw err;
    }
  }

  public async getJourneyById(id: string): Promise<Journey> {
    try {
      const result = await axios.get(`${this.path}/${id}`, {
        withCredentials: true,
      });
      console.log("getJourneyById", result);
      return result.data;
    } catch (err) {
      console.log("Error getJourneyById", err);
      throw err;
    }
  }

  public async updateJourney(id: string, input: JourneyUpdate): Promise<Journey> {
    try {
      const result = await axios.post(`${this.path}/update/${id}`, input, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("updateJourney", result);
      return result.data;
    } catch (err) {
      console.log("Error updateJourney", err);
      throw err;
    }
  }

  public async removeJourney(id: string): Promise<void> {
    try {
      const result = await axios.post(`${this.path}/remove/${id}`, {}, {
        withCredentials: true,
      });
      console.log("removeJourney", result);
    } catch (err) {
      console.log("Error removeJourney", err);
      throw err;
    }
  }
}

export default JourneyService;
