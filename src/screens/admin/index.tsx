import React from "react";
import { NavLink, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import MyPage from "./MyPage";
import Result from "./Result";
import Customer from "./Customer";
import Team from "./Team";
import Journey from "./Journey";
import Statistics from "./Statistics";
import Article from "./Article";
import FAQ from "./FAQ";
import "./styles.scss";
import MemberService from "../../services/MemberService";

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const memberService = new MemberService();

      await memberService.logout();
      navigate("/");  // Redirect to the login page
    } catch (err) {
      console.error("Error during logout:", err);
    }
  };
  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h2 className="sidebar-logo">Admin Panel</h2>
        <nav className="menu">
          <NavLink to="mypage" className={({ isActive }) => (isActive ? "active" : "")}>My Page</NavLink>
          <NavLink to="result" className={({ isActive }) => (isActive ? "active" : "")}>Result</NavLink>
          <NavLink to="customer" className={({ isActive }) => (isActive ? "active" : "")}>Customer</NavLink>
          <NavLink to="team" className={({ isActive }) => (isActive ? "active" : "")}>Team</NavLink>
          <NavLink to="journey" className={({ isActive }) => (isActive ? "active" : "")}>Journey</NavLink>
          <NavLink to="statistics" className={({ isActive }) => (isActive ? "active" : "")}>Statistics</NavLink>
          <NavLink to="article" className={({ isActive }) => (isActive ? "active" : "")}>Article</NavLink>
          <NavLink to="faq" className={({ isActive }) => (isActive ? "active" : "")}>FAQ</NavLink>
          <button onClick={handleLogout} className="logout-button">Logout</button> {/* Logout button */}
        </nav>
      </aside>
      <main className="content">
        <Routes>
          <Route path="mypage" element={<MyPage />} />
          <Route path="result" element={<Result />} />
          <Route path="customer" element={<Customer />} />
          <Route path="team" element={<Team />} />
          <Route path="journey" element={<Journey />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="article" element={<Article />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="*" element={<Navigate to="mypage" />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard;
