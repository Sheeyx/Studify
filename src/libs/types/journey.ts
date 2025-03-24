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
    year: string;
    description: string;
    event: string;
    _id: string;
    journeyYear: string;
    journeyDesc: string;
    createdAt: Date;
    updatedAt: Date;
  }
  