

export interface Customer  {
    _id: string;
    name: string;
    role: string;
    video?: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
  }

  export interface CustomerInput {
    name: string;
    role: string;
    video?: string;
    description?: string;
  }

  export interface CustomerUpdateInput {
    _id: string;
    name?: string;
    role?: string;
    video?: string;
    description?: string;
  }