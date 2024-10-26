import React, { useState, useEffect } from "react";
import MemberService from "../../../../services/MemberService";
import "./styles.scss";

interface MemberUpdateInput {
  _id: string;
  memberNick?: string;
  memberAddress?: string;
  memberDesc?: string;
  memberImage?: any;
  univerImages?: any[];
}

const MemberUpdateForm: React.FC = () => {
  const [formData, setFormData] = useState<MemberUpdateInput>({
    _id: "", // User's ID should be fetched from the context or stored data
    memberNick: "",
    memberAddress: "",
    memberDesc: "",
    memberImage: "",
    univerImages: [],
  });

  // Fetch user data on component mount
  useEffect(() => {
    const storedData = localStorage.getItem("memberData");
    if (storedData) {
      const member = JSON.parse(storedData);
      setFormData((prevState) => ({
        ...prevState,
        _id: member._id,
        memberNick: member.memberNick,
        memberAddress: member.memberAddress,
        memberDesc: member.memberDesc,
      }));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "memberImage") {
      setFormData({
        ...formData,
        memberImage: e.target.files ? e.target.files[0] : null,
      });
    } else if (e.target.name === "univerImages") {
      setFormData({
        ...formData,
        univerImages: e.target.files ? Array.from(e.target.files) : [],
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const memberService = new MemberService();

      const result = await memberService.updateMember(formData); // Call the service
      console.log("Profile updated:", result);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Error updating profile", err);
      alert("Failed to update profile");
    }
  };

  return (
    <div className="member-update-form">
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nick Name:</label>
          <input
            type="text"
            name="memberNick"
            value={formData.memberNick}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="memberAddress"
            value={formData.memberAddress}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="memberDesc"
            value={formData.memberDesc}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Profile Image:</label>
          <input
            type="file"
            name="memberImage"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <label>Additional Images:</label>
          <input
            type="file"
            name="univerImages"
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default MemberUpdateForm;
