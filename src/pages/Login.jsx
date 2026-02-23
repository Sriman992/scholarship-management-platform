import Navbar from "../components/Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import loginImage from "../assets/login-illustration.png";

export default function Login() {
  const navigate = useNavigate(); // 🔹 missing
  const [role, setRole] = useState("student");

  const handleLogin = (e) => {
    e.preventDefault(); // 🔹 prevents page refresh

    if (role === "student") {
  navigate("/student");
} else {
  navigate("/admin");
}
  };

  return (
    <>
      <Navbar />

      <div className="login-wrapper">
        {/* Left Side Visual */}
        <div className="login-visual">
          <h2>Welcome Back</h2>
          <p>
            Access your scholarship dashboard and manage your applications easily.
          </p>

          <div className="login-image-wrapper">
            <img src={loginImage} alt="Scholarship Illustration" />
          </div>
        </div>

        {/* Right Side Form */}
        <div className="login-box">
          <h3>Login</h3>

          {/* Role Toggle */}
          <div className="role-toggle">
            <button
              type="button"
              className={role === "student" ? "active" : ""}
              onClick={() => setRole("student")}
            >
              🎓 Student
            </button>

            <button
              type="button"
              className={role === "admin" ? "active" : ""}
              onClick={() => setRole("admin")}
            >
              🛡️ Admin
            </button>
          </div>

          {/* 🔹 IMPORTANT: attach onSubmit */}
          <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />

            <button type="submit" className="btn-primary full">
              Login as {role}
            </button>
            <p className="signup-text">
  Don’t have an account?{" "}
  <Link to="/signup" className="signup-link">
    Sign Up
  </Link>
</p>
          </form>
        </div>
      </div>
    </>
  );
}