import axios from "axios";

import { serverApi } from "../libs/types/config";
import { LoginInput, Member, MemberInput, MemberUpdateInput } from "../libs/types/member";
class MemberService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async signup(input: MemberInput): Promise<Member> {
    try {
      const url = this.path + "/member/signup";
      const result = await axios.post(url, input, { withCredentials: true });
      console.log("signup", result);

      const member: Member = result.data.member;
      console.log("member", member);
      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (err) {
      console.log(" Error signup , Admin", err);
      throw err;
    }
  }

  public async login(input: LoginInput): Promise<Member> {
    try {
      const url = this.path + "/member/login";
      const result = await axios.post(url, input, { withCredentials: true });
      console.log("login", result);

      const member: Member = result.data.member;
      console.log("member", member);
      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (err) {
      console.log(" Error login , getUser", err);
      throw err;
    }
  }
  public async logout(): Promise<void> {
    try {
      const url = this.path + "/member/logout";
      const result = await axios.post(url, {}, { withCredentials: true });
      console.log("logout", result);

      localStorage.removeItem("memberData");
    } catch (err) {
      console.log(" Error logout ", err);
      throw err;
    }
  }
  public async updateMember(input: MemberUpdateInput): Promise<Member> {
    try {
      const formData = new FormData();
      formData.append("memberNick", input.memberNick || "");
      formData.append("memberAddress", input.memberAddress || "");
      formData.append("memberDesc", input.memberDesc || "");
      formData.append("memberImage", input.memberImage || "");
      if (input.univerImages && input.univerImages.length > 0) {
        input.univerImages.forEach((image, index) => {
          formData.append(`univerImages[${index}]`, image);
        });
      }


      const result = await axios(`${serverApi}/member/update`, {
        method: "POST",
        data: formData,
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("updateMember", result);
      const member: Member = result.data;
      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (err) {
      console.log(" Error updateMember ", err);
      throw err;
    }
  }
}

export default MemberService;
