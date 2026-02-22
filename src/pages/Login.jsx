import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login() {
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "student") {
      navigate("/student");
    } else {
      navigate("/admin");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Login</h2>

        <div className="form-box">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <select onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>

          <button onClick={handleLogin} className="btn">
            Login
          </button>
        </div>
      </div>
    </>
  );
}