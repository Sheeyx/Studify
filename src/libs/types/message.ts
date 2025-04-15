import { City } from "../enums/message.enum";

export interface MessageInput {
    fullName: string;
    phone: string;
  }
  export interface Messages {
    _id: string;
    fullName: string;
    phone: string;
    createdAt: Date;
    updatedAt: Date;
  }
  