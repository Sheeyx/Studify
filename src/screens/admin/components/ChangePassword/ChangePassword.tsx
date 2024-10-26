// ChangePasswordForm.tsx
import React, { useState } from "react";
import MemberService from "../../../../services/MemberService";
import { ChangePasswordInput } from "../../../../libs/types/member";
import "./styles.scss";


const ChangePasswordForm: React.FC = () => {
  const [formData, setFormData] = useState<ChangePasswordInput>({
    oldPassword: "",
    newPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const memberService = new MemberService();
      const result = await memberService.changePassword(formData); // Call the service

      console.log("Password changed:", result);
      alert("Password changed successfully!");
    } catch (err) {
      console.error("Error changing password", err);
      alert("Failed to change password. Please try again.");
    }
  };

  return (
    <div className="change-password-form">
      <h3>Change Password</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Old Password:</label>
          <input
            type="password"
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
