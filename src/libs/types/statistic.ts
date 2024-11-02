export interface StatisticInput {
    experience:string;
    universities:string;
    customers:string;
    branches:string;
}
export interface StatisticUpdate{
    _id: string;
    experience?:string;
    universities?:string;
    customers?:string;
    branches?:string;
}

export interface Statistic {
    _id: string;
    experience:string;
    universities:string;
    customers:string;
    branches:string;
    createdAt: Date;
    updatedAt: Date;
}