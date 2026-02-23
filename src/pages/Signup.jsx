import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Store role temporarily (mock auth)
    localStorage.setItem("role", role);

    if (role === "student") {
      navigate("/student");
    } else {
      navigate("/admin");
    }
  };

  return (
    <>
      <Navbar />

      <div className="signup-wrapper">
  <div className="signup-box">
          <h3>Create Account</h3>

          <div className="role-toggle">
            <button
              className={role === "student" ? "active" : ""}
              onClick={() => setRole("student")}
            >
              🎓 Student
            </button>

            <button
              className={role === "admin" ? "active" : ""}
              onClick={() => setRole("admin")}
            >
              🛡️ Admin
            </button>
          </div>

          <form onSubmit={handleSignup}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />

            <button type="submit" className="btn-primary full">
              Sign Up as {role}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}