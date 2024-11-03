import { City } from "../enums/message.enum";

export interface MessageInput {
    fullName: string;
    phone: string;
    city: City;
  }
  export interface Messages {
    _id: string;
    fullName: string;
    phone: string;
    city: City;
    createdAt: Date;
    updatedAt: Date;
  }
  