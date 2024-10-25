import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobals } from "../../../../app/hooks/useGlobals";
import { LoginInput } from "../../../../libs/types/member";
import MemberService from "../../../../services/MemberService";
import './styles.scss';


const Login: React.FC = () => {
  const { setAuthMember } = useGlobals();
  const [memberNick, setMemberNick] = useState<string>("");
  const [memberPassword, setMemberPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const loginInput: LoginInput = { memberNick, memberPassword };

    try {
      const memberService = new MemberService();
      const member = await memberService.login(loginInput);
      setAuthMember(member);
      setLoading(false);
      navigate("/admin");
    } catch (err) {
      setLoading(false);
      setError("Login failed. Please check your credentials.");
      console.log("Login error: ", err);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Admin Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="memberNick">Nickname:</label>
            <input
              type="text"
              id="memberNick"
              value={memberNick}
              onChange={(e) => setMemberNick(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={memberPassword}
              onChange={(e) => setMemberPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
