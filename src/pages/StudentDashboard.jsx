import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function StudentDashboard() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Student Dashboard</h2>
        <div className="dashboard-cards">
          <div className="card">
            <h3>Browse Scholarships</h3>
            <Link to="/scholarships" className="btn">View</Link>
          </div>
          <div className="card">
            <h3>Track Applications</h3>
            <Link to="/applications" className="btn">
  View Applications
</Link>
          </div>
        </div>
      </div>
    </>
  );
}