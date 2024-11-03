// MessageService.ts
import axios from "axios";
import { serverApi } from "../libs/types/config";
import { MessageInput, Messages } from "../libs/types/message"; // Adjust path if necessary

class MessageService {
  private readonly path: string;

  constructor() {
    this.path = `${serverApi}/message`;
  }

  public async createMessage(input: MessageInput): Promise<Messages> {
    try {
      const result = await axios.post(`${this.path}/create`, input, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("createMessage", result);
      return result.data;
    } catch (err) {
      console.log("Error createMessage", err);
      throw err;
    }
  }

  public async getMessages(): Promise<Messages[]> {
    try {
      const result = await axios.get(`${this.path}/all`, {
        withCredentials: true,
      });
      console.log("getAllMessages", result);
      return result.data;
    } catch (err) {
      console.log("Error getAllMessages", err);
      throw err;
    }
  }

}

export default MessageService;
