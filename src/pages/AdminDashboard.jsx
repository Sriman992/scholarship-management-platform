import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Admin Dashboard</h2>

        <div className="dashboard-cards">
          <div className="card">
            <h3>Review Applications</h3>
            <Link to="/admin/applications" className="btn">
              View
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}