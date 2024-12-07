import axios from "axios";
import { serverApi } from "../libs/types/config";
export interface UniLogo {
    unilogosImages:string
    _id:string
}
export interface UniLogoInput {
    unilogosImages: File;
  }
class UnilogosService {
  private readonly path: string;

  constructor() {
    this.path = `${serverApi}/unilogos`;
  }

  public async createResult( input: UniLogoInput): Promise<UniLogo> {
    try {
      const formData = new FormData();



          formData.append(`unilogosImages`, input.unilogosImages);



      const result = await axios.post(`${this.path}/create`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("createResult", result);
      return result.data;
    } catch (err) {
      console.log("Error createResult", err);
      throw err;
    }
  }

  public async removeResult(id: string): Promise<void> {
    try {
      const result = await axios.post(`${this.path}/remove/${id}`, {}, { withCredentials: true });
      console.log("removeResult", result);
    } catch (err) {
      console.log("Error removeResult", err);
      throw err;
    }
  }

  public async getAllResults(): Promise<UniLogo[]> {
    try {
      const result = await axios.get(`${this.path}/all`, { withCredentials: true });
      console.log("getAllResults", result);
      return result.data;
    } catch (err) {
      console.log("Error getAllResults", err);
      throw err;
    }
  }
}

export default UnilogosService;
