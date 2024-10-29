import React, { useState } from "react";
import MemberUpdateForm from "../components/MemberUpdate/MemberUpdate";
import ChangePasswordForm from "../components/ChangePassword/ChangePassword";

const MyPage: React.FC = () => {
  const [showChangePassword, setShowChangePassword] = useState(false);

  const toggleChangePassword = () => setShowChangePassword(!showChangePassword);

  return (
    <div>
      <h2 style={{ marginTop: "10px" }}>My Page</h2>
      <button
        onClick={toggleChangePassword}
        style={{
          width: "150px", // You can set this to a smaller width as desired
          padding: "8px 1px",
        }}
      >
        {showChangePassword ? "Back to Profile" : "Change Password"}
      </button>
      {showChangePassword ? (
        <ChangePasswordForm />
      ) : (
        <MemberUpdateForm />
      )}
    </div>
  );
};

export default MyPage;
