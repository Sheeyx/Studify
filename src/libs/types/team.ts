export interface Team  {
    _id: string;
    name: string;
    role: string;
    image?: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
  }

  export interface TeamInput {
    name: string;
    role: string;
    image?: string;
    description?: string;
  }


  export interface TeamUpdateInput {
    _id: string;
    name?: string;
    role?: string;
    image?: string;
    description?: string;
  }