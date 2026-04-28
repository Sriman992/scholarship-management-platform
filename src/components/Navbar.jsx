import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuthSession, logoutUser } from "../services/authService";

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = getAuthSession();

    if (session) {
      setUser({ email: session.email, role: session.role });
    }
  }, []);

  const handleLogout = () => {
    logoutUser();
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="logo">Scholarship Platform</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        {user ? (
          <>
            <span className="user-info">
              ({user.role}) {user.email}
            </span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="login-btn">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
