import axios from "axios";
import { serverApi } from "../libs/types/config";
import { Team, TeamInput, TeamUpdateInput } from "../libs/types/team";

class TeamService {
  private readonly path: string;

  constructor() {
    this.path = `${serverApi}/team`;
  }

  public async createTeam(input: TeamInput, image?: File): Promise<Team> {
    try {
      const formData = new FormData();
      formData.append("name", input.name);
      formData.append("role", input.role);
      if (input.description) formData.append("description", input.description);
      if (image) formData.append("image", image);

      const result = await axios.post(`${this.path}/create`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("createTeam", result);
      return result.data;
    } catch (err) {
      console.log("Error createTeam", err);
      throw err;
    }
  }

  public async getTeams(): Promise<Team[]> {
    try {
      const result = await axios.get(`${this.path}/all`, {
        withCredentials: true,
      });
      console.log("getAllTeams", result);
      return result.data;
    } catch (err) {
      console.log("Error getAllTeams", err);
      throw err;
    }
  }

  public async getTeamById(id: string): Promise<Team> {
    try {
      const result = await axios.get(`${this.path}/${id}`, {
        withCredentials: true,
      });
      console.log("getTeamById", result);
      return result.data;
    } catch (err) {
      console.log("Error getTeamById", err);
      throw err;
    }
  }

  public async updateTeam(id: string, input: TeamUpdateInput, image?: File): Promise<Team> {
    try {
      const formData = new FormData();
      formData.append("name", input.name ?? "");
      formData.append("role", input.role ?? "");
      if (input.description) formData.append("description", input.description ?? "");
      if (image) formData.append("image", image);

      const result = await axios.post(`${this.path}/update/${id}`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("updateTeam", result);
      return result.data;
    } catch (err) {
      console.log("Error updateTeam", err);
      throw err;
    }
  }

  public async removeTeam(id: string): Promise<void> {
    try {
      const result = await axios.post(`${this.path}/remove/${id}`, {}, {
        withCredentials: true,
      });
      console.log("removeTeam", result);
    } catch (err) {
      console.log("Error removeTeam", err);
      throw err;
    }
  }
}

export default TeamService;
