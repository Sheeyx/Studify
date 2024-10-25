import { MemberStatus } from "../enums/member.enum";

export interface Member {
  _id: string;
  memberStatus?: MemberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword?: string;
  memberAddress?: string;
  memberDesc?: string;
  memberImage?: string;
  memberPosts: number;
  memberTeams: number;
  univerImages?: string[];

  createdAt: Date;
  updatedAt: Date;
}

export interface MemberInput {
  memberNick: string;
  memberPassword: string;
  memberAddress?: string;
  memberDesc?: string;
  memberImage?: string;
  memberPoints?: number;
}
export interface LoginInput {
  memberNick: string;
  memberPassword: string;
}

export interface MemberUpdateInput {
  _id: string;
  memberNick?: string;
  memberAddress?: string;
  memberDesc?: string;
  memberImage?: string;
  univerImages?: string[] ;
  memberPosts?: number;
  memberTeams?: number;
}


export interface ChangePasswordInput {
  oldPassword: string;
  newPassword: string;
}