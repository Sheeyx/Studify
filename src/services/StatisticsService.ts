import axios from "axios";
import { serverApi } from "../libs/types/config";
import { Statistic, StatisticInput, StatisticUpdate } from "../libs/types/statistic";

class StatisticsService {
  private readonly path: string;

  constructor() {
    this.path = `${serverApi}/statistic`;
  }

  public async createStatistic(input: StatisticInput): Promise<Statistic> {
    try {
      const result = await axios.post(`${this.path}/create`, input, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("createStatistic", result);
      return result.data;
    } catch (err) {
      console.log("Error createStatistic", err);
      throw err;
    }
  }

  public async getStatistics(): Promise<Statistic[]> {
    try {
      const result = await axios.get(`${this.path}/all`, {
        withCredentials: true,
      });
      console.log("getAllStatistics", result);
      return result.data;
    } catch (err) {
      console.log("Error getAllStatistics", err);
      throw err;
    }
  }

  public async getStatisticById(id: string): Promise<Statistic> {
    try {
      const result = await axios.get(`${this.path}/${id}`, {
        withCredentials: true,
      });
      console.log("getStatisticById", result);
      return result.data;
    } catch (err) {
      console.log("Error getStatisticById", err);
      throw err;
    }
  }

  public async updateStatistic(id: string, input: StatisticUpdate): Promise<Statistic> {
    try {
      const result = await axios.post(`${this.path}/update/${id}`, input, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("updateStatistic", result);
      return result.data;
    } catch (err) {
      console.log("Error updateStatistic", err);
      throw err;
    }
  }

  public async removeStatistic(id: string): Promise<void> {
    try {
      const result = await axios.post(`${this.path}/remove/${id}`, {}, {
        withCredentials: true,
      });
      console.log("removeStatistic", result);
    } catch (err) {
      console.log("Error removeStatistic", err);
      throw err;
    }
  }
}

export default StatisticsService;
