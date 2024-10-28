import React from "react";
import MemberUpdateForm from "../components/MemberUpdate/MemberUpdate";
import ChangePasswordForm from "../components/ChangePassword/ChangePassword";


const MyPage: React.FC = () => (
  <div>
    <h2>My Page</h2>
    <ChangePasswordForm/>
    <MemberUpdateForm />

  </div>
);

export default MyPage;
