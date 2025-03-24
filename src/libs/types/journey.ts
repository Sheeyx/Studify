import { FaqStatus } from "../enums/faq.enum";

export interface JourneyInput {
    journeyYear: string;
    journeyDesc: string;
    journeyTitle: string;
  }
  
  export interface JourneyUpdate {
    _id: string;
    journeyStatus?: FaqStatus;
    journeyYear?: string;
    journeyDesc?: string;
  }
  
  export interface Journey {
    journeyTitle: string;
    year: string;
    description: string;
    event: string;
    _id: string;
    journeyYear: string;
    journeyDesc: string;
    createdAt: Date;
    updatedAt: Date;
  }
  