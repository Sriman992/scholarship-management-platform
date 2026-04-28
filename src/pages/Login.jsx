import Navbar from "../components/Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import loginImage from "../assets/login-illustration.png";
import { loginUser, logoutUser } from "../services/authService";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    logoutUser();

    try {
      const res = await loginUser({ email, password });
      const payload = res.data;

      // Extract token from JSON response
      const token = payload?.token;

      if (!token) {
        throw new Error("Login failed: No JWT token received from server.");
      }

      const decoded = jwtDecode(token);
      const role = payload?.role ?? decoded?.role;
      const userEmail = payload?.email ?? decoded?.sub;

      if (!role || !userEmail) {
        throw new Error("Login failed: Invalid login response from server.");
      }

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("email", userEmail);

      // Redirect based on role
      if (role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/student");
      }
    } catch (error) {
      logoutUser();
      console.error("Login failed:", error);

      const serverMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.response?.data;

      alert(
        typeof serverMessage === "string" && serverMessage.trim()
          ? serverMessage
          : "Login failed: Invalid email or password"
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="login-wrapper">
        <div className="login-visual">
          <h2>Welcome Back</h2>
          <img src={loginImage} alt="Login" />
        </div>

        <div className="login-box">
          <h3>Login</h3>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className="btn-primary full">
              Login
            </button>

            <p className="signup-text">
              Don&apos;t have an account?{" "}
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
