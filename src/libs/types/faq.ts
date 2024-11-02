import { FaqStatus } from "../enums/faq.enum";

export interface Faq {
    _id: string;
    faqStatus: FaqStatus;
    faqTitle: string;
    faqContent: string;
    memberId?: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface FaqInput {
    faqTitle: string;
    faqContent: string;
  
  }
  
  export interface FaqUpdate {
    _id: string;
    faqStatus: FaqStatus;
    faqTitle: string;
    faqContent: string;
  
  
  }