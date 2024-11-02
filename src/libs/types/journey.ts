import { FaqStatus } from "../enums/faq.enum";

export interface JourneyInput {
    journeyYear: string;
    journeyDesc: string;
  }
  
  export interface JourneyUpdate {
    _id: string;
    journeyStatus?: FaqStatus;
    journeyYear?: string;
    journeyDesc?: string;
  }
  
  export interface Journey {
    _id: string;
    journeyYear: string;
    journeyDesc: string;
    createdAt: Date;
    updatedAt: Date;
  }
  